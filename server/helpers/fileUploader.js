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

    if (file.mimetype === 'images/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    else {
        cb(new Error('Unsupported file type'));

    }



}

const multerFileSchema = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 10 },
    fileFilter: fileFilter

})

const uploadMiddleware = multerFileSchema.single('image');



module.exports = {
    upload: function (req, res, next) {
        uploadMiddleware(req, res, function (err) {
            if (err) {
                // Handle the error thrown by the file filter
                return res.status(400).json({ error: err.message });
            }
            else if (err instanceof multer.MulterError) {
                console.log('111111');
                return res.status(400).json({ error: err.message });

            }
            next();
        });
    }
};