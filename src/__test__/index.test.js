const randomString = require('../index');

/**
 * Permite hace una suite de prubas dentro de una sola funcion
 * es decir en el describe se engloban varios test
 * @test
 */
describe('Probar funcionalidades', ()=> {
  test('Probar funcionalidad', () => {
    expect(typeof (randomString())).toBe('string')
  });
  test('Comporbar que no existe cuidad', () => {
    expect(randomString()).not.toMatch(/Cordova/)
  })
})
