const utils = require("../utils/utils");

const userRoutes = (app, fs) => {
  const dataPath = "./data/listings.json";

  app.get("/api/search", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      const { make, model, sort, price, year } = req.query;

      let { cars } = JSON.parse(data);

      // filter by maker of cars
      cars = utils.filterModelOrMake(cars,make,'make');

      // filter by model of cars
      cars = utils.filterModelOrMake(cars,model,'model');

      // filter by price range of cars
      cars = utils.filterYearOrPrice(cars,price,'price');

      // filter by year range of cars
      cars = utils.filterYearOrPrice(cars,year,'year');

      // sort by year or/and price of cars
      cars = utils.sortYearOrPrice(cars,sort);

      res.send(cars);
    });
  });
};

module.exports = userRoutes;
