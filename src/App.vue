<template>
  <div>
    <header>
        <h1>Actividad Integradora 1: Resaltador de sintaxis</h1>
        <h2>Integrantes del equipo</h2>
          <p>Luis Ángel Guzmán Iribe - A01741757</p>
          <p>Antonio López Chávez - A01741741</p>
          <p>Leonardo Mojica Amezquita - A00571960</p>
    </header>
    <hr>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
