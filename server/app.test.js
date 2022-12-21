const request = require("supertest");
const app = require("./app");

describe("POST /user/login", () => {
  describe("given an email and password", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/user/login").send({
        email: "tawhidalmuhaimin@gmail.com",
        password: "tawhid10",
      });
      expect(response.statusCode).toBe(200);
    });
  });
  describe("wrong password", () => {
    test("should respond with a 400 status code", async () => {
      const response = await request(app).post("/user/login").send({
        email: "tawhidalmuhaimin@gmail.com",
        password: "tawhid110",
      });
      expect(response.statusCode).toBe(400);
    });
  });
  describe("given wrong email", () => {
    test("should respond with a 400 status code", async () => {
      const response = await request(app).post("/user/login").send({
        email: "n@gmail.com",
        password: "tawhid10",
      });
      expect(response.statusCode).toBe(400);
    });
  });
});

describe("POST /user/create", () => {
  describe("email already in use ", () => {
    test("should respond with a 400 status code", async () => {
      const response = await request(app)
        .post("/user/create")
        .send({
          email: "tawhid11@gmail.com",
          password: "tawhid11",
          name: "tawhid11",
          dob: Date("2022-03-25"),
        });
      expect(response.statusCode).toBe(400);
    });
  });
  describe("no email", () => {
    test("should respond with a 400 status code", async () => {
      const response = await request(app)
        .post("/user/create")
        .send({
          email: "",
          password: "tawhid12",
          name: "tawhid12",
          dob: Date("2022-03-25"),
        });
      expect(response.statusCode).toBe(400);
    });
  });
  describe("no password", () => {
    test("should respond with a 400 status code", async () => {
      const response = await request(app)
        .post("/user/login")
        .send({
          email: "tawhid11@gmail.com",
          password: "",
          name: "tawhid11",
          dob: Date("2022-03-25"),
        });
      expect(response.statusCode).toBe(400);
    });
  });
  describe("no name", () => {
    test("should respond with a 400 status code", async () => {
      const response = await request(app)
        .post("/user/create")
        .send({
          email: "tawhid40@gmail.com",
          password: "tawhid11",
          name: "",
          dob: Date("2022-03-25"),
        });
      expect(response.statusCode).toBe(400);
    });
  });
  describe("ALL CORRECT", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app)
        .post("/user/create")
        .send({
          email: "tawhid151@gmail.com",
          password: "tawhid11",
          name: "tawhid11",
          dob: Date("2022-03-25"),
        });
      expect(response.statusCode).toBe(200);
    });
  });
  describe("NO BD ", () => {
    test("should respond with a 400 status code", async () => {
      const response = await request(app)
        .post("/user/create")
        .send({
          email: "tawhid15@gmail.com",
          password: "tawhid11",
          name: "tawhid11",
          dob: Date(""),
        });
      expect(response.statusCode).toBe(400);
    });
  });
  describe("NO password ", () => {
    test("should respond with a 400 status code", async () => {
      const response = await request(app)
        .post("/user/create")
        .send({
          email: "tawhid15@gmail.com",
          password: "",
          name: "tawhid11",
          dob: Date("2022-03-25"),
        });
      expect(response.statusCode).toBe(400);
    });
  });
});
