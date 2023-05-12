const uploadFile = (req, res) => {

    // console.log(req.file.filename);
    console.log('controller');


    if (req.file.filename) {
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