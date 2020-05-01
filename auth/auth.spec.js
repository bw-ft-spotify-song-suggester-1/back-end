const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig.js");

describe("registration functional", function () {
  describe("/auth/register", function () {
    beforeEach(async () => {
      await db("users").truncate();
    });
    it("should return status code 201", function () {
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
      const inserted = await db("users");
      expect(inserted).toHaveLength(1);
    });
    it("should have added user to db", async function () {

        await request(server)
          .post("/api/auth/register")
          .send({ username: "gavtesting", password: "gavtesting" })
          .then((res) => {
          });
          const inserted = await db("users");
          expect(inserted).toHaveLength(1);
      });
  });
});
