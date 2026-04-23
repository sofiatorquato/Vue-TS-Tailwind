<script setup lang="ts">
import Cabecalho from './components/Cabecalho.vue';
import NavBar from './components/NavBar.vue';
import ListaUsuario from './components/ListaUsuario.vue';

</script>

<template>
    <NavBar v-once/>
  <header>
    <Cabecalho/>
  </header>
 
 <main>
  <ListaUsuario/>
 </main>
</template>
