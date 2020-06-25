const request = require('supertest')
const agent = request('https://sigen.pro/v1')

//Первый тест

describe("api_sigen_info", function() {
    it("Info 3.1", async function() {
      await new Promise(function(resolve, reject) {
      return agent
      .get('/web-public/exchange/info')
      .expect('Content-Type', /json/)
      .expect(function(res) {
        expect(res.statusCode).toEqual(200)
      })
      .end(function(err, res){
        if (err) {
          reject(`\r\n
          Ошибка: ${err.stack.replace(/[\"\\]/g, '')}\r\n\r\n
          Данные: ${JSON.stringify(res, null, 2).replace(/[\"\\]/g, '')}`)
        } else {
          resolve(res)
        }
      })
    })
  })
})
