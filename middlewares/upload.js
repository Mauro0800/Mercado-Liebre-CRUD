const multer = require('multer');
const path = require('path');

const storageCourseImages = multer.diskStorage({
    destination : function (req,file,callback) {
        callback(null, 'public/images/products')
    },
    filename : function (req,file,callback) {
        callback(null,`${Date.now()}_products_${path.extname(file.originalname)}`)
    }
});

const uploadCourseImages = multer({
    storage : storageCourseImages
});

module.exports = {
    uploadCourseImages
}