<template>
  <div class="hello">
    <!-- Control absoluto de este div -->
    <div id="myApp">
        <div class="child">
            <div>
                <h1>Input de Texto</h1>
                <form @submit="submitForm">
                    <textarea id="rawText" v-model="rawText" type="text" name="rawText" spellcheck="false" class="boxsizingBorder"> </textarea>
                    <input type="submit" value="Enviar">
                </form>
            </div>
            <div>
                <h1>Texto Resaltado</h1>
                <div id="textContainer">
                    <template v-for="({token, tipo}, index) in tokens" :key="index">
                      <span >
                        <span v-if="tipo === 'salto_de_linea'">
                            <br>
                        </span>
                        <span v-else :class="{variable: isVariable(tipo), numeros: isNumeros(tipo), operador: isOperador(tipo), comentario: isComentario(tipo), parentesis: isParentesis(tipo)}"> {{token}} </span>
                      </span>
                    </template>
                </div>
            </div>
            <hr>
            <div>
                <table class="tokensTable">
                    <thead>
                        <th>Error</th>
                        <th>Linea</th>
                        <th>Posición</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{sintax.error}}</td>
                            <td>{{sintax.linea}}</td>
                            <td>{{sintax.pos}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="child">
            <h1>Tokens</h1>
            <table class="tokensTable">
                <thead>
                    <th>Indice</th>
                    <th>Token</th>
                    <th>Tipo</th>
                </thead>
                <tbody>
                    <tr v-for="({token, tipo}, index) in tokens" :key="index">
                        <td> {{index + 1}} </td>
                        <td> {{token}} </td>
                        <td> {{tipo}} </td>
                    </tr>
                </tbody>
            </table>
        </div>
  </div>
  </div>
</template>

<script>
import getTokens from '../assets/js/getTokens';
import getSintax from '../assets/js/getSintax';
const initialRawText = `b=7
Alfa_1=32.4*6.1E-8*(4/5)
d=a^b// Esto es un comentario`
export default {
  name: 'HelloWorld',
  data() {
        return {
            rawText: initialRawText,
            sintax: {error: 'XXXX', linea: 'XXXX', pos: 'XXXX'},
            tokens: getTokens(initialRawText),
        }
    },
    methods: {
        submitForm ( e ) {
            e.preventDefault();

            // console.log(e);
            console.log(this.rawText);

            this.tokens = getTokens(this.rawText);
            console.log(this.tokens);
            this.sintax = getSintax(this.tokens); 
            console.log(this.sintax);
        },
        isVariable (tipo) {
            return (tipo === 'variable');
        },
        isNumeros (tipo) {
            return ((tipo === 'entero') || (tipo === 'real'));
        },
        isOperador (tipo) {
            return ((tipo === 'asignacion') || (tipo === 'potencia') || (tipo === 'multiplicacion') || (tipo === 'division') || (tipo === 'suma') || (tipo === 'resta'))
        },
        isComentario (tipo) {
            return (tipo === 'comentario');
        },
        isParentesis (tipo) {
            return ((tipo === 'parentesis_que_abre') || (tipo === 'parentesis_que_cierra'));
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    font-family: Arial, Helvetica, sans-serif;
    padding: 15px;
}

#myApp .child {
    display: inline-block; /** set the divs side-by-side **/
    vertical-align: top;
    width: 50%;
    height: 100%;
    padding: 15px;
    font-size: 20px; /** override font-size: 0 of #container, so that text will be visible again **/
    text-align: left; /** set text in the .child divs back to normal alignment **/
    box-sizing: border-box;
}

#rawText {
    background-color: rgb(31, 31, 31);
    width: 100%; 
    height: 195px;
    color: rgb(233, 232, 232);
    font-size: inherit;
    border-radius: 5px;
    padding: 15px;
    font-family: 'Courier New', monospace;
 }

 .boxsizingBorder {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}

#textContainer {
    background-color: rgb(31, 31, 31);
    border-radius: 5px;
    padding: 15px;
    font-family: 'Courier New', monospace;
}

.variable {
    color: rgb(233, 232, 232);
}

.operador {
    color: #42b883;
}

.numeros {
    color: #338fec;
}

.parentesis {
    color: rgb(204, 204, 204);
}

.comentario {
    color: rgb(109, 96, 58);
}

.tokensTable {
  font-family: inherit;
  border-collapse: collapse;
  width: 100%;
}

.tokensTable td, .tokensTable th {
  border: 1px solid #ddd;
  padding: 8px;
}

.tokensTable tr:nth-child(even){background-color: #f2f2f2;}

.tokensTable tr:hover {background-color: #ddd;}

.tokensTable th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #42b883;
  color: white;
}
</style>
