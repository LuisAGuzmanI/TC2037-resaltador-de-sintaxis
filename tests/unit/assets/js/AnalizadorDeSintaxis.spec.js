import getTokens from '@/assets/js/getTokens.js'
import getSintax from '@/assets/js/getSintax.js'

describe('AnalizadorDeSintaxis', () => {

    // Tests de Luis Ángel
    test('Test 1 Correcto', () => {

        const testText = `
        b=7
        Alfa_1=32.4*6.1E-8*(4/5)
        d=a^b// Esto es un comentario`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);

        if(testSintax.error){
            console.log(testSintax)
            console.log(testText)
        }
        // console.log(testTokens)

        expect(testSintax.error).toBeFalsy()
        
    })

    test('Test 1 Error', () => {

        const testText = `
        b=7
        Alfa_1=32.4*6.1E-8*(4/5)+
        d=a^b// Esto es un comentario`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);

        if(testSintax.error){
            console.log(testSintax)
            console.log(testText)
        }
        // console.log(testTokens)

        expect(testSintax.error).toBeTruthy()
        
    })

    test('Test 2 Correcto', () => {

        const testText = `
        //Esto es un test
        estoEsUnaVariable = 9
        notacionCientifica = 4E-20
        operacion =9 * (pi*(e^8))`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);

        if(testSintax.error){
            console.log(testSintax)
            console.log(testText)
        }
        // console.log(testTokens)

        expect(testSintax.error).toBeFalsy()
        
    })

    test('Test 2 Error', () => {

        const testText = `
        //Esto es un test
        esto Es Una Variable = 9
        notacion Cientifica = -4E-20
        operacion = (9/(pi*(e^8))) + 3`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);

        if(testSintax.error){
            console.log(testSintax)
            console.log(testText)
        }
        // console.log(testTokens)

        expect(testSintax.error).toBeTruthy()
        
    })

    test('Test 3 Correcto', () => {

        const testText = `
        b=7
        Alfa_1=32.4*6.1E-8*(4/5)
        d=a^b// Esto es un comentario`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);

        if(testSintax.error){
            console.log(testSintax)
            console.log(testText)
        }
        // console.log(testTokens)

        expect(testSintax.error).toBeFalsy()
        
    })

    test('Test 3 Error', () => {

        const testText = `
        b=7
        Alfa_1=32.4*6.1E-8*(4/5)+
        d=a^b// Esto es un comentario`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);

        if(testSintax.error){
            console.log(testSintax)
            console.log(testText)
        }
        // console.log(testTokens)

        expect(testSintax.error).toBeTruthy()
        
    })

    // Tests de Antonio
    test('Test 4 Correcto', () => { 
        const testText = `
        romel = 455
        Estudiante = 120000 - (120000/2)
        Abc = 12 * (23 + 10)
        Var = a * (b /10) - 20
        Error = 34.6 - (45.4 * 23E-19)`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);
        
        if(testSintax.error){
            console.log(testSintax)
            console.log(testText)
            // console.log(testTokens)
        }

        expect(testSintax.error).toBeFalsy()    
    })

    test('Test 4 Error', () => { 
        const testText = `
        romel = 455
        Estudiante = 120000 - (120000/2)
        Abc = 12 * (23 + 10)
        Var = a * (b /10) - 20
        Error = 34.6 - (45.4 * 23E-19) 23`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);

        if(testSintax.error){
            console.log(testSintax)
            console.log(testText)
        }
        // console.log(testTokens)

        expect(testSintax.error).toBeTruthy()    
    })

    // Tests de Antonio
    test('Test 5 Correcto', () => { 
        const testText = `
        gen = z + c - (45 + 6)
        tor = ti + lla * 56 / (34 * 5)
        exca = (-56 / 5) + (34 * 10) `

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);
        
        if(testSintax.error){
            console.log(testSintax)
            console.log(testText)
            // console.log(testTokens)
        }

        expect(testSintax.error).toBeFalsy()    
    })

    test('Test 5 Error', () => { 
        const testText = `
        gen = z + c - 45 + 6)
        tor = ti + lla * 56  /  (34 * 5(
        exca = (-56 5) + (34 * 10)`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);

        if(testSintax.error){
            console.log(testSintax)
            console.log(testText)
        }
        // console.log(testTokens)

        expect(testSintax.error).toBeTruthy()    
    })

    // Tests de Leonardo 
    test('Test 7 Correcto', () => { 
        const testText = `a=(3+3-(5+7))`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);

        if(testSintax.error){
            console.log(testSintax)
            console.log(testText)
        }
        // console.log(testTokens)

        expect(testSintax.error).toBeFalsy()    
    })

    test('Test 7 Error', () => { 
        const testText = `a==(3+3-(5+7))`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);

        if(testSintax.error){
            console.log(testSintax)
            console.log(testText)
        }
        // console.log(testTokens)

        expect(testSintax.error).toBeTruthy()    
    })
})