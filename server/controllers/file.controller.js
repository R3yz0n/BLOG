const path = require('path')
const fs = require('fs')
const fileUploader = require('../helpers/fileUploader');

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



const updateFile = async (req, res, next) => {

    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../uploads', filename);
    console.log(filename);
    console.log(filePath);

    // Check if the file exists
    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            return res.status(404).json({ message: 'File not found.' });
        }

        // Delete the file
        fs.unlink(filePath, (err) => {

            console.log('unlink');

            if (err) {
                return res.status(500).json({ message: 'Failed to delete the file.' });
            }

            // return res.status(200).json({ message: 'File deleted successfully.' });
            console.log('deleted');
        });
    });











    if (!req.file) {
        return res.status(400).json({ message: 'Image must be uploaded.' });
    }

    // console.log(req.file.filename);
    console.log('first upload');
    // console.log(req.file);


    if (req.file.filename) {


        res.status(201).json({
            message: "Image updated sucessfully.",
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
module.exports = {
    uploadFile: uploadFile,
    getFile, getFile,
    deleteFile: deleteFile,
    updateFile: updateFile
}