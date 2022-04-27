import getTokens from '@/assets/js/getTokens.js'
import getSintax from '@/assets/js/getSintax.js'

describe('AnalizadorDeSintaxis', () => {

    test('Test 1 Correcto', () => {

        const testText = `
        b = 7
        Alfa_1 = 32.4 * 6.1E-8 * ( 4 / 5 )
        d = a ^ b  // Esto es un comentario`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);         
       
        expect(testSintax.error).toBeFalsy()
        
    })

    test('Test 1 Error', () => {

        const testText = `
        b = 7
        Alfa_1 = 32.4 * 6.1E-8 * ( 4 / 5 ) +
        d = a ^ b // Esto es un comentario`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);         
       
        expect(testSintax.error).toBeTruthy()
        
    })

    test('Test 2 Correcto', () => {

        const testText = `
        //Esto es un test
        estoEsUnaVariable = 9
        notacionCientifica = 4E-20
        operacion = ( 9 / ( pi * ( e ^ 8 ) ) ) + 3`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);         
       
        expect(testSintax.error).toBeFalsy()
        
    })

    test('Test 2 Error', () => {

        const testText = `
        //Esto es un test
        esto Es Una Variable = 9
        notacion Cientifica = -4E-20
        operacion = ( 9 / ( pi * ( e ^ 8 ) ) ) + 3`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);         
       
        expect(testSintax.error).toBeTruthy()
        
    })

    test('Test 3 Correcto', () => {

        const testText = `var = a - 4`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);         
       
        expect(testSintax.error).toBeFalsy()
        
    })

    test('Test 3 Error', () => {

        const testText = `var = a - + 4`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);         
       
        expect(testSintax.error).toBeTruthy()
        
    })

    test('Test 4 Correcto', () => { 
        const testText = `
        romel = 455
        Estudiante = 120000 - ( 120000 / 2 )
        Abc = 12 * (23 + 10)
        Var = a * (b /10) - 20
        Error = 34.6 - (45.4 * 23E-19)`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);        
        if(testSintax.error){
            console.log(testSintax)
            console.log(testText)
                   }

        expect(testSintax.error).toBeFalsy()    
    })

    test('Test 4 Error', () => { 
        const testText = `
        romel = 455
        Estudiante = 120000 - ( 120000 / 2 )
        Abc = 12 * ( 23 + 10 )
        Var = a * ( b / 10 ) - 20
        Error = 34.6 - ( 45.4 * 23E-19 ) 23`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);         
       
        expect(testSintax.error).toBeTruthy()    
    })

    test('Test 5 Correcto', () => { 
        const testText = `
        gen = z + c - (45 + 6)
        tor = ti + lla * 56 / ( 34 * 5 )
        exca = ( -56 / 5 ) + ( 34 * 10 )`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);        
        if(testSintax.error){
            console.log(testSintax)
            console.log(testText)
                   }

        expect(testSintax.error).toBeFalsy()    
    })

    test('Test 5 Error', () => { 
        const testText = `
        gen = z + c - 45 + 6)
        tor = ti + lla * 56  /  ( 34 * 5 (
        exca = ( -56 5 ) + ( 34 * 10 )`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);         
       
        expect(testSintax.error).toBeTruthy()    
    })

    test('Test 8 Correcto', () => { 
        const testText = `x  = ( - b + ( b ^ 2 + 4 * ( a * c ) ) ) / ( 2 * a )`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);        
        if(testSintax.error){
            console.log(testSintax)
            console.log(testText)
                   }

        expect(testSintax.error).toBeFalsy()    
    })

    test('Test 8 Error', () => { 
        const testText = `x =(-b+(b^2 // + 4*(a*c)))/(2*a)`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);         
       
        expect(testSintax.error).toBeTruthy()    
    })

    test('Test 7 Correcto', () => { 
        const testText = `a = ( 3 + 3 - ( 5 + 7 ) )`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);         
       
        expect(testSintax.error).toBeFalsy()    
    })

    test('Test 7 Error', () => { 
        const testText = `a = = ( 3 + 3 - ( 5 + 7 ) )`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);
         
       
        expect(testSintax.error).toBeTruthy()    
    })
    
    test('Test 8 Correcto', () => { 
        const testText = `gue = -rre + 45 + grados`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);         
       
        expect(testSintax.error).toBeFalsy()    
    })

    test('Test 8 Error', () => { 
        const testText = `gue -= -rre + 45 + grados`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);
         
       
        expect(testSintax.error).toBeTruthy()    
    })

    test('Test 9 Correcto', () => { 
        const testText = `
        p = 3 + ( n + 5 )
        La = mi * (do / re) - 123
        fe = h * ie + (-rro ^ 2)`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);         
       
        expect(testSintax.error).toBeFalsy()    
    })

    test('Test 9 Error', () => { 
        const testText = `
        p = 3 + ( n + 5 )
        La = mi * (do / re sol) - 123
        fe = h * ie + (-rro ^ 2)`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);
         
       
        expect(testSintax.error).toBeTruthy()    
    })
    
    test('Test 10 Correcto', () => { 
        const testText = `c = ( a ^ 2 + b ^ 2 ) ^ ( 1 / 2 )`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);         
       
        expect(testSintax.error).toBeFalsy()    
    })

    test('Test 10 Error', () => { 
        const testText = `c = ( a ^ 2 + b ^ 2 ) ( 1 / 2 )`

        const testTokens = getTokens(testText); 
        const testSintax = getSintax(testTokens);
         
       
        expect(testSintax.error).toBeTruthy()    
    })

})