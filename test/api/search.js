//During the test the env variable is set to test
process.env.NODE_ENV = "test";

//Require the dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../server");
const should = chai.should();

chai.use(chaiHttp);

describe("/search all the cars", () => {
  it("it should GET all the cars", (done) => {
    chai
      .request(server)
      .get("/api/search")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(31);
        done();
      });
  });
});
