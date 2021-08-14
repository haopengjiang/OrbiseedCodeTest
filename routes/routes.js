const utils = require('../utils/utils')

const userRoutes = (app, fs) => {

  const dataPath = './data/listings.json';

  app.get('/api/search', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      const { make, model, sort, price, year } = req.query;

      let {cars} = JSON.parse(data);

      // filter by maker of cars
      if (make) {
      	cars = cars.filter(car => car.make.toLowerCase() === make.toLowerCase());
      }

	    // filter by model of cars
      if (model) {
      	cars = cars.filter(car => car.model.toLowerCase() === model.toLowerCase());
      }

      // filter by price range of cars
      if (price) {
      	if (typeof price === 'string') {
      		if (price.split(':')[0] === "min") {
      			let lowestPrice = parseInt(price.split(':')[1]);
				    cars = cars.filter(car => car.price >= lowestPrice);
      		} 
      		if (price.split(':')[0] === "max") {
      			let highestPrice = parseInt(price.split(':')[1]);
				    cars = cars.filter(car => car.price <= highestPrice);
      		} 
      	} else if (typeof price === 'object' && price.length === 2) {
      		  let lowestPrice = utils.findValueWithMinLabel(price);
      		  let highestPrice = utils.findValueWithMaxLabel(price);

      		  cars = cars.filter(car => car.price <= highestPrice && car.price >= lowestPrice);
      	}
      } 

      // filter by year range of cars
      if (year) {
      	if (typeof year === 'string') {
      		if (year.split(':')[0] === "min") {
      			let lowestYear = parseInt(year.split(':')[1]);
				    cars = cars.filter(car => car.year >= lowestYear);
      		} 
      		if (year.split(':')[0] === "max") {
      			let highestYear = parseInt(year.split(':')[1]);
				    cars = cars.filter(car => car.year <= highestYear);
      		} 
      	} else if (typeof year === 'object' && year.length === 2) {
      		  let lowestYear = utils.findValueWithMinLabel(year);
      		  let highestYear = utils.findValueWithMaxLabel(year);

      		  cars = cars.filter(car => car.year <= highestYear && car.year >= lowestYear);
      	}
      }

      // sort by year or/and price of cars
      if (sort) {
      	if (sort.trim() === "year") {
      		cars = cars.sort(function (a, b) {
      			return b.year - a.year;				
			    });
      	} 
      	if (sort === "-year") {
      		cars = cars.sort(function (a, b) {
  				  return a.year - b.year;
			    });
      	}
      	if (sort.trim() === "price") {
      		cars = cars.sort(function (a, b) {
      			return b.price - a.price;
			    });
      	} 
      	if (sort === "-price") {
      		cars = cars.sort(function (a, b) {
  				  return a.price - b.price;
			    });
        }
      }

      res.send(cars);
    });
  });

};

module.exports = userRoutes;