const request = require("supertest");
const server = require("./server.js");
const db = require("../database/dbConfig.js");

describe("server running", function () {
  describe("/", function () {
    it("should return status code 200", function () {
      return request(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
  });
  describe("/", function () {
    it("should return 'api: up and running! view the readme for all endpoints available'", function () {
      return request(server)
        .get("/")
        .then((res) => {
          expect(res.body.api).toBe('up and running! view the readme for all endpoints available')
        });
    });
  }); 
});
