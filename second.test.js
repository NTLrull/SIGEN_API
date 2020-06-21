const request = require('supertest')
const agent = request('https://reqres.in/api')

describe("Набор тестов 2", function() {
 
    it("Тест 2.1", async function() {
        await new Promise(function(resolve, reject) {
          return agent
            .get('/users')
            .expect('Content-Type', /json/)
            .expect(function(res) {
              expect(res.statusCode).toEqual(800)
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
