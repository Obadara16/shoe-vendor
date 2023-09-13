const express = require('express');
const shoeController = require('../controllers/shoeController');
const authMiddleware = require('../middleware/authMiddleware'); 

const router = express.Router();


router.get('/shoes', shoeController.getAllShoes);
router.get('/shoes/:id', shoeController.getShoeById);


router.use(authMiddleware); 

router.post('/shoes', shoeController.createShoe);
router.put('/shoes/:id', shoeController.updateShoe);
router.delete('/shoes/:id', shoeController.deleteShoe);

module.exports = router;
