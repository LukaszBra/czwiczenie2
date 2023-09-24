const app = require("./app")
const supertest = require("supertest")
const request = supertest(app)


describe("/test endpoint", () => {
	it("Testy wykonywaly sie w czasie:" , async() => {
	const response = await request.get("/test")
	expect(response.status).toBe(200)
	expect(response.text).toBe("Hello World WAR")
})
})
