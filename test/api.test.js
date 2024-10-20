// test/api.test.js
import request from "supertest";
import { expect } from "chai";
import app from "../src/app.js"; // Pastikan Anda menambahkan ekstensi .js untuk import ESModule

describe("API Testing", () => {
  it("should return all items", (done) => {
    request(app)
      .get("/api/items")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");
        expect(res.body.length).to.be.at.least(1);
        done();
      });
  });

  it("should create a new item", (done) => {
    const newItem = { name: "Item 3" };
    request(app)
      .post("/api/items")
      .send(newItem)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property("id");
        expect(res.body).to.have.property("name", "Item 3");
        done();
      });
  });
});
