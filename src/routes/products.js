// ************ Require's ************
const express = require('express');
const { uploadCourseImages } = require('../../middlewares/upload');
const router = express.Router();

// ************ Controller Require ************
const {index,create,store,detail,edit,update,destroy} = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', create); 
router.post('/create',uploadCourseImages.single('image'), store); 

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', edit); 
router.put('/update/:id',uploadCourseImages.single('image'), update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', destroy); 


module.exports = router;
