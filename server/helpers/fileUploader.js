const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {
            console.log('storage');
            cb(null, '././uploads');

        },
        filename: (req, file, cb) => {
            cb(null, new Date().getTime() + path.extname(file.originalname))


        }
    }
);

const fileFilter = (req, file, cb) => {
    console.log('file filter');
    // console.log(file);
    // console.log(req.file);

    if (file.mimetype === 'images/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    else {
        cb(new Error('Unsupported file format.'));

    }



}

const multerFileSchema = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 10 },
    fileFilter: fileFilter

})

const uploadMiddleware = multerFileSchema.single('file');



module.exports = {
    upload: function (req, res, next) {
        uploadMiddleware(req, res, function (err) {
            // console.log(req);
            // console.log(err);
            console.log('--------');

            // console.log(req.file);
            if (err) {
                // Handle the error thrown by the file filter
                return res.status(400).json({ message: err.message });
            }
            else if (err instanceof multer.MulterError) {
                console.log('111111');
                return res.status(400).json({ message: err.message });

            }
            next();
        });
    }
};