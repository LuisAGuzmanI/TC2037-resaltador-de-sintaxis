# Actividad Integradora 1, Resaltador de sintaxis (evidencia de competencia)
* Leonardo Mojica Amezquita - A00571960
* Antonio López Chávez - A01741741 
* Luis Ángel Guzmán Iribe - A01741757

### Gramatica libre de contexto 
    S : Var = A  C \n | C \n | \n
    C : comentario | ε
    A : X | A O A | ( A ) | - X
    X : Var | Entero | Real
    O : + | - | ^ | * | / 

En esta gramatica nos aseguramos de que cada linea inicie con un comentario, un salto de linea, o una variable seguida de un igual, seguido de una expresión matematica (A). La expresion matematica puede ser X (una variable o un numero), puede ser otra expresión matematica  seguido de un operador matematico (O), seguido de otra expresion A, y por ultimo A tambien puede ser ella misma encerrada en parentesis.


## Correr Aplicación Web

Para probar el programa entra al siguiente link: https://tc2037-resaltador-de-sintaxis.netlify.app
- Podrás ver un cuadro de texto como input, en este pondras la expesión matematica que quieres analizar.
- Posteriormente le daras clic al boton de enviar, podras ver el resultado del texto resaltado en el cuardo de texto "texto resaltado".
- Abajo veras una tabla la cual te dira si encontro algun error en la sintaxis.
- Por ultimo, podras ver una tabla del lado derecho con los tokens que se analizaron.

Para el correcto funcionamiento del programa se recomienda que haya un **espacio entre cada token**, ya que el codigo espera estos espacios, y el no 
poenerlos puede generar problemas con tokens como enteros negativos donde si pones.

Por ejemplo: 
```
2 -4
```
Lo toma mal ya que solo hay dos tokens ``( 2 y -4)``, por lo que para que la expresión sea correcta debes poner el espacio que falta ``2 - 4``.

## Correr Aplicación Web
Si quieres correr el codigo de forma  local debes acceder a la carpeta del proyecto y aplicar el comando: "npm run serve", el unico pre-requisito es tener instalado node.js para usar los comandos del npm, para instalar node.js entra a la siguiente liga: https://nodejs.org/es/download/.


### Setup del proyecto
```
npm install
```

### Compilación y auto-recargas para desarrollo
```
npm run serve
```

### Compilación y minificación para producción
```
npm run build
```

### Correr pruebas unitarias
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

