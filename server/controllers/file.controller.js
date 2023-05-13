const uploadFile = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Image must be uploaded.' });
    }
    // console.log(req.file.filename);
    console.log('controller');
    // console.log(req.file);


    if (req.file.filename) {
        res.status(201).json({
            message: "Image upload sucessfully.",
            url: req.file.path
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
    uploadFile: uploadFile
}