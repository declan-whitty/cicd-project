const request = require("supertest");
const app = require("../app/server");

describe("GET /hello", () => {
  it("should return hello message", async () => {
    const res = await request(app).get("/hello");
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe("Hello from CI/CD app!");
  });
});
