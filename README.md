# OrbiseedCodeTest
Code Challenge of Orbiseed

***Features***

* Language - [JavasScript]
* Testing - [Mocha](https://mochajs.org/) [Chai](http://www.chaijs.com/)
* Code Style - [Prettier](https://prettier.io/)


## Installation & Run
### With Docker 
* open terminal git clone https://github.com/haopengjiang/OrbiseedCodeTest.git
* cd to \OrbiseedCodeTest
* *docker build -t orbiseed-codetest .* (build image and intall packages)
* *docker run -p 3000:3000 orbiseed-codetest*
### Without Docker 
* open terminal git clone https://github.com/haopengjiang/OrbiseedCodeTest.git
* cd to \OrbiseedCodeTest
* *npm install* (intall packages) 
* *npm start* (start application)

## Test
* open terminal cd to \OrbiseedCodeTest
* *npm run test* - Run all test cases

## Document for End Point

* localhost:3000/api/search (get all cars)

* localhost:3000/api/search?make=honda (get cars filter by make)

* localhost:3000/api/search?model=Civic (get cars filter by model)

* localhost:3000/api/search?price=max:26000
* localhost:3000/api/search?price=min:20000
* localhost:3000/api/search?price=max:26000&price=min:20000 
  (get cars filter by price)

* localhost:3000/api/search?year=max:2016
* localhost:3000/api/search?year=min:2012
* localhost:3000/api/search?year=max:2016&year=min:2012
  (get cars filter by year)

* localhost:3000/api/search?sort=+year (get cars sorted by year newest to oldest)
* localhost:3000/api/search?sort=-year (get cars sorted by year oldest to newest)

* localhost:3000/api/search?sort=+price (get cars sorted by price most expensive to cheapest)
* localhost:3000/api/search?sort=-price (get cars sorted by price cheapest to most expensive)

* localhost:3000/api/search?make=Honda&model=Civic&make=Toyota&model=Camry&year=min:2018 ( support multiple makes and models, and more than one criteria at the same time e.g. search all Honda Civic or Toyota Camry made after 2018.)