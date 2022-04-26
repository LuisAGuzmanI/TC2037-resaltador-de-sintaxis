import getTokens from '@/assets/js/getTokens.js'
import getSintax from '@/assets/js/getSintax.js'

describe('AnalizadorDeSintaxis', () => {

    test('Test 1', () => {

        const testText = `
        b=7
        Alfa_1=32.4*6.1E-8*(4/5)
        d=a^b// Esto es un comentario`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);

        console.log(testSintax.error)
        console.log(testText)
        // console.log(testTokens)

        expect(testSintax.error).toBeFalsy()
        
    })

    test('Test 2', () => {

        const testText = `
        b=7
        Alfa_1=32.4*6.1E-8*(4/5)+
        d=a^b// Esto es un comentario`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);

        console.log(testSintax.error)
        console.log(testText)
        // console.log(testTokens)

        expect(testSintax.error).toBeTruthy()
        
    })

    test('Test 3', () => { 
        const testText = `
        romel = 455
        Estudiante = 120000 - (120000/2)
        Abc = 12 * (23 + 10)
        Var = a * (b /10) - 20
        Error = 34.6 - (45.4 * 23E-19) 23`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);

        console.log(testSintax.error)
        console.log(testText)
        // console.log(testTokens)

        expect(testSintax.error).toBeTruthy()    
    })
})