const digitos = ['1','2','3','4','5','6','7','8','9','0']

// Lista con caracteres de la 'a' a la 'z', 'A' a la 'Z' y '_'  
const caracteres = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ñ','z','x','c','b','n','m','Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Ñ','Z','X','C','V','B','N','M','_']

// [{tipo, token}, aumento]
const automata = (str, index) => {
    
    const token = str[index];

    // Tokens directos (Uno o dos caracteres)
    switch (token) {
        case '=':
            return [{token, tipo:'asignacion'}, 1];
        case '^':
            return [{token, tipo:'potencia'}, 1];
        case '+':
            return [{token, tipo:'suma'}, 1];
        case '*':
            return [{token, tipo:'multiplicación'}, 1];
        case '(':
            return [{token, tipo:'parentesis_que_abre'}, 1];
        case ')':
            return [{token, tipo:'parentesis_que_cierra'}, 1];
        default:
            if (token === '-' && !digitos.includes(str[index + 1])) {
                return [{token, tipo:'resta'}, 1];
            } else if (token === '/' && str[index + 1] === ' ') {
                return [{token, tipo:'división'}, 1];
            } else if (token === '/' && str[index + 1 ] === '/') {
                return [{token:(str.slice(index, str.length)), tipo:'comentario'}, str.length - index ]  ;
            }

            break;
    }

    // Sentencia para detectar variables con un nombre de 1 a n caracteres
    if( caracteres.includes(token) ){
        let inicio = index;
        let varName = '';

        while(caracteres.includes(str[inicio]) || digitos.includes(str[inicio])){
            varName += str[inicio];
            inicio += 1;
        }

        return [{token:varName, tipo:'variable'}, inicio - index];
    }

    // Sentencia para detectar números de 1 a n digitos, decimales, y con notación cientifica}
    if( token === '-' || digitos.includes(token) ){
        let inicio = index;
        let varName = '';

        // Variables booleanas para detectar si es un número Real
        let isDecimal = false;
        let isScientific = false;

        if(token === '-'){
            inicio += 1;
            varName += token;
        }

        while(digitos.includes(str[inicio]) || (str[inicio] === '.' && !isDecimal) || (str[inicio] == 'E' || str[inicio] == 'e')){
            if(str[inicio] == '.'){
                isDecimal = true;
            }

            if(str[inicio] == 'E' || str[inicio] == 'e'){
                isScientific = true;
                varName += str[inicio];
                inicio += 1;
            }
			
            varName += str[inicio];
            inicio += 1;

        }

        // La sentencia regresa 'Real' si el numero tiene punto decimal o usa notación científica, y regresa 'Entero' si ninguno de estas condiciones se cumple
        return [{token:varName, tipo:(( isDecimal || isScientific ) ? 'real' : 'entero')}, inicio - index];
    }

    // Se regresa esto si el programa no fue capaz de determinar el tipo del token dado
    return [{token, tipo: 'otro'}, 1];
}


const getTokens = (rawText) => {
    const finalTokens = []
    
    for (const line of rawText.split('\n')) {
        let i = 0
        while(i < line.length){
            let [elemento, aumento] = automata(line, i)
            if(elemento.tipo != 'otro'){
                finalTokens.push(elemento)
            }
            i += aumento;
        }
        finalTokens.push({token:'-n', tipo: 'salto_de_linea'})
    }

    return finalTokens;
}

export default getTokens;