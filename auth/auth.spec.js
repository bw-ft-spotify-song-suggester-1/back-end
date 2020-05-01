const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig.js");

describe("registration functional", function () {
  describe("/auth/register", function () {
    beforeEach(async () => {
      await db("users").truncate();
    });
    it("should post successfully with status 201", function () {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "gavtesting", password: "gavtesting" })
        .then((res) => {
          expect(res.status).toBe(201);
        });
    });
    it("should have correct user details in response", async function () {
      await request(server)
        .post("/api/auth/register")
        .send({ username: "gavtesting", password: "gavtesting" })
        .then((res) => {
          expect(res.body.username).toBe("gavtesting");
        });
    });
    it("should have added user to db", async function () {
      await request(server)
        .post("/api/auth/register")
        .send({ username: "gavtesting", password: "gavtesting" })
        .then((res) => {
          console.log("user registration successful");
        });
      const inserted = await db("users");
      expect(inserted).toHaveLength(1);
    });
  });
});

describe("logion functional", function () {
  describe("/auth/login", function () {
    // beforeEach(async () => {
    //   await db("users").truncate();
    // });
    it("should return user's token and status 200", function () {
      return request(server)
        .post("/api/auth/login")
        .send({ username: "gavtesting", password: "gavtesting" })
        .then((res) => {
          expect(res.status).toBe(200);
          expect(res.body.token).toBeTruthy();
        });
    });
  });
});
