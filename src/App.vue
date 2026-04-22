<script setup lang="ts">
import Cabecalho from './components/Cabecalho.vue';
import NavBar from './components/NavBar.vue';
import Usuario from './components/Usuario.vue';
import ListaUsuario from './components/ListaUsuario.vue';

</script>

<template>
    <NavBar v-once/>
  <header>
    <Cabecalho/>
  </header>
 
 <main>
  <!-- <Usuario/> -->
  <ListaUsuario/>
 </main>
</template>
