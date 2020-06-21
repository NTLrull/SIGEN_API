const request = require('supertest')
const agent = request('https://sigen.pro/v1')

describe("Набор тестов 3", function() {
    it("Тест 3.1", async function() {
      await agent
        .get('/web-public/exchange/info')
        .expect('Content-Type', /json/)
        .expect(200)
    })
})
