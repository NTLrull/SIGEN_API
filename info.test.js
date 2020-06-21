const request = require('supertest')
const agent = request('https://sigen.pro/v1')

describe("api_sigen_info", function() {
    it("info 3.1", async function() {
      await agent
        .get('/web-public/exchange/info')
        .expect('Content-Type', /json/)
        .expect(200)
    })
})
