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
        </div>
        <div class="child">
            <h1>Tokens</h1>
            <table>
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
export default {
  name: 'HelloWorld',
  data() {
        return {
            tokens: {},
            rawText: '',
        }
    },
    methods: {
        submitForm ( e ) {
            e.preventDefault();

            // console.log(e);
            console.log(this.rawText);

            this.tokens = getTokens(this.rawText);
            console.log(this.tokens);
        },
        isVariable (tipo) {
            return (tipo === 'variable');
        },
        isNumeros (tipo) {
            return ((tipo === 'entero') || (tipo === 'real'));
        },
        isOperador (tipo) {
            return ((tipo === 'asignacion') || (tipo === 'potencia') || (tipo === 'multiplicación') || (tipo === 'división') || (tipo === 'resta'))
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
    height: 300px;
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
    color: rgb(209, 49, 75);
}

.numeros {
    color: rgb(156, 117, 210);
}

.parentesis {
    color: rgb(204, 204, 204);
}

.comentario {
    color: rgb(109, 96, 58);
}
</style>
