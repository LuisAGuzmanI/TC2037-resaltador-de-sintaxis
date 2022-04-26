function getSintax(jsonFile) {
    /* 
    Este codigo se encarga de revisar que cada linea
    de un documento este bien escrita, la gramatica libre
    de contexto para cada linea es la siguiente...
    S : Var = A  C \n | C \n | \n
    C : comentario | ε
    A : X | A O A | ( A )
    X : Var | Entero | Real
    O : + | - | ^ | * | / 
    */

    // guardamos en un arreglo de json
    //let jsonFile = JSON.parse('[{ "token": "b", "tipo": "variable" }, { "token": "=", "tipo": "asignacion" }, { "token": "(", "tipo": "parentesis_que_abre" }, { "token": "7", "tipo": "entero" }, { "token": ")", "tipo": "parentesis_que_cierra" }, { "token": "", "tipo": "salto_de_linea" }, { "token": "X", "tipo": "variable" }, { "token": "=", "tipo": "asignacion" }, { "token": "3", "tipo": "entero" }, { "token": "+", "tipo": "suma" }, { "token": "(", "tipo": "parentesis_que_abre" }, { "token": "4", "tipo": "entero" }, { "token": "*", "tipo": "multiplicacion" }, { "token": "5.4", "tipo": "real" }, { "token": ")", "tipo": "parentesis_que_cierra" },  { "token": "", "tipo": "salto_de_linea" }]');
    //console.log(a[0].tipo);


    function S() {
        // primero revisamos que la linea inicie con una variable,
        // un comentario o que sea simpemente un satlo de linea
        if (jsonFile[pos].tipo == 'variable') {
            pos++; // avansamos en la posicion 
            if (jsonFile[pos].tipo == 'asignacion') {
                pos++;
                // A()
                if (A()) {
                    if (C()) {

                        if (jsonFile[pos].tipo == "salto_de_linea") {
                            linea++;
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }

            }
            else {
                return false;
            }

        }
        else if (jsonFile[pos].tipo == 'comentario') {
            // termina en salto de linea
            pos++;
            if (jsonFile[pos].tipo == 'salto_de_linea') {

                return true;
            }
            else {
                return false;
            }

        }
        else if (jsonFile[pos].tipo == "salto_de_linea") {

            return true;
        }
        else {
            // error
            return false;
        }
    }

    function A() {

        if (X(pos)) { // la X() hace pos++ en true
            if (O()) { // la O() hace pos++ solo si es true
                if (A()) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else if (jsonFile[pos].tipo == "comentario" || jsonFile[pos].tipo == "salto_de_linea") {
                return true;
            }
            return true;

        }
        else if (parentesisAbre()) {
            if (A()) {
                if (parentesisCierra()) {
                    if (O()) { // la O() hace pos++ solo si es true
                        if (A()) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else if (jsonFile[pos].tipo == "comentario" || jsonFile[pos].tipo == "salto_de_linea") {
                        return true;
                    }
                    else {
                        return false;
                    }
                    
                }
                else {
                    return false;
                }
            }
            else if (parentesisCierra()) {
                return true;
            }
            else {
                return false;
            }
        }
        else if (parentesisCierra()) {
            return false;
        }
        else {
            return false;
        }
    }

    function parentesisAbre() {
        if (jsonFile[pos].tipo == 'parentesis_que_abre') {
            //console.log(pos);
            pos++;
            return true;
        }
        else { return false; }
    }

    function parentesisCierra() {
        //pos++;
        //console.log(pos);
        if (jsonFile[pos].tipo == 'parentesis_que_cierra') {
            pos++;
            return true;
        }
        else {
            pos -= 1;
            return false;
        }
    }

    function X(posAux) {
        if (jsonFile[posAux].tipo == 'variable' || jsonFile[posAux].tipo == 'entero' || jsonFile[posAux].tipo == 'real') {
            pos++;
            return true;
        }
        else { return false; }
    }


    function C() {
        if (jsonFile[pos].tipo == 'comentario') {
            pos++;
            return true;
        }
        else if (jsonFile[pos].tipo == 'salto_de_linea') {
            return true;
        }
        else { return false; }
    }

    function O() {
        // pos++;
        if (jsonFile[pos].token == '+' || jsonFile[pos].token == '-' || jsonFile[pos].token == '*' || jsonFile[pos].token == '/' || jsonFile[pos].token == "^") {
            pos++; // tal vez se quite esto
            return true;
        }
        else { return false; }
    }

    function solucion() {

        return S();

    }



    let pos = 0;



    // console.log("________TOKENS________");
    // console.log("se analizaron " + jsonFile.length + " tokens");
    // for (let i = 0; i < jsonFile.length; i++) {
    //     console.log(jsonFile[i].token + " :  " + jsonFile[i].tipo);
    // }
    // console.log("|______________________|");


    let linea = 1; // contador que nos dira en que linea se encontro el error 

    let flag = true;


    while (pos < jsonFile.length && flag) {
        flag = solucion();
        pos++;
        
    }




    // if (flag) {
    //     console.log("el documento esta bien escrito ");
    // }
    // else {
    //     console.log("se encontro un error en el token " + (pos-1) + " en la linea " + linea);
    // }


    // console.log('la posicion final fue: ' + (pos-1));


    return {
        "error" : !flag,
        "pos" : pos,
        "linea" : linea
    }; 

}

export default getSintax;
