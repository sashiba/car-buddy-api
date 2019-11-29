const Car = require('../models/car');

module.exports = {
  index: async (req, res, next) => {
    const cars = await Car.find({});

    res.status(200).json(cars);
  },

  getCar: async (req, res, next) => {
    const { carId } = req.params;
    const car = await Car.findById(carId);

    res.status(200).json(car);
  },

  newCar: async (req, res, next) => {
    const newCar = new Car({
      make: req.body.make,
      model: req.body.model,
      year: req.body.year
    });
    
    console.log(newCar);
    const car = await newCar.save();

    res.status(201).json(car);
  },

  updateCar: async (req, res, next) => {
    const { carId } = req.params;
    const newCar = req.body;
    const oldCar = await Car.findByIdAndUpdate(carId, newCar);

    res.status(200).json({success: true});
  }
};
