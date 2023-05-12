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
    // console.log(file);
    // console.log(file);

    if (file.mimetype === 'images/jpeg' || file.mimetype === 'image/png') {

        cb(null, true);
    }
    else {

        cb(new Error('Unsupported Format'), false)

    }



}

const uploadFile = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 10 },
    fileFilter: fileFilter

})

module.exports = {
    upload: uploadFile
}
