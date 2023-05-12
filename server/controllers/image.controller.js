const uploadFile = (req, res, err) => {

    // console.log(req.file.filename);
    if (err) {
        console.log(err.message);
        return res.status(400).json({
            message: 'Error: ' + err.message
        });
    }
    if (req.file.filename) {
        console.log('herexd');
        res.status(401).json({
            message: "Image upload sucessfully",
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
    uploadFile: uploadFile
}