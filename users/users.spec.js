const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig.js");

describe("authentication restriction in place", function () {
  describe("GET /users", function () {
    it("should restrict access", function () {
      return request(server)
        .get("/api/users")
        .then((res) => {
          expect(res.status).toBe(400);
          expect(res.body.message).toBe("Please provide credentials");
        });
    });
    it("should allow with a token", function () {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "gavtest", password: "gavtest" })
        .then((res) => {
          expect(res.status).toBe(201);
          return request(server)
            .post("/api/auth/login")
            .send({ username: "gavtest", password: "gavtest" })
            .then((res) => {
              Token = res.body.token;
              console.log(Token);
              expect(res.status).toBe(200);
              return request(server)
                .get("/api/users")
                .set("authorization", Token)
                .then((res) => expect(res.status).toBe(200));
            });
        });
    });
    db("users").truncate();
  });
});
