const calculadora = require('../src/calculador')

describe('testes unitarios', ()=> {
    test('soma da media das notas', ()=> {
        expect(calculadora.media(5,5)).toBe('MI')
    })
}) 