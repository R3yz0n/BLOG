const path = require('path')
const fs = require('fs')

const uploadFile = (req, res) => {

    if (!req.file) {
        return res.status(400).json({ message: 'Image must be uploaded.' });
    }
    // console.log(req.file.filename);
    console.log('controller');
    // console.log(req.file);


    console.log(req.file.filename);
    if (req.file.filename) {
        res.status(201).json({
            message: "Image upload sucessfully.",
            url: req.file.filename
        })
    }

    else {
        res.status(500).json(
            {
                message: "Something went wrong."
            }
        )
    }


}




const getFile = (req, res) => {

    console.log('hello');
    console.log(req.params.filename);

    const filePath = path.join(__dirname, '../uploads/', req.params.filename);
    console.log('--------------');
    console.log(filePath);

    console.log(__dirname);
    console.log('this is file controller');

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            return res.status(404).json({ message: 'File not found.' });
        }
        // Serve the file
        console.log(filePath);
        res.sendFile(filePath);

    });




}




const deleteFile = (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../uploads', filename);
    // console.log(filename);
    // console.log(filePath);

    // Check if the file exists
    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            return res.status(404).json({ message: 'File not found.' });
        }

        // Delete the file
        fs.unlink(filePath, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Failed to delete the file.' });
            }

            return res.status(200).json({ message: 'File deleted successfully.' });
        });
    });

}


const updateFile = (req, res, next) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../uploads', filename);
    // console.log(filename);
    // console.log(filePath);

    // Check if the file exists
    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            return res.status(404).json({ message: 'File not found.' });
        }

        // Delete the file
        fs.unlink(filePath, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Failed to delete the file.' });
            }

            // return res.status(200).json({ message: 'File deleted successfully.' });
            next()
        });
    });


    next()



}
module.exports = {
    uploadFile: uploadFile,
    getFile, getFile,
    deleteFile: deleteFile,
    updateFile: updateFile
}