var express = require('express');
var router = express.Router();
const CarController = require('../controllers/cars');

router.route('/')
  .get(CarController.index)
  .post(CarController.newCar)

router.route('/:carId')
  .get(CarController.getCar)
  .patch(CarController.updateCar)

module.exports = router;