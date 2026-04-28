<script setup lang="ts">
import Cabecalho from './components/Cabecalho.vue';
import NavBar from './components/NavBar.vue';

</script>

<template>
    <NavBar v-once/>
  <header>
    <Cabecalho/>
  </header>
 
 <main>
  <!-- <ListaUsuario/> -->
  <router-view/>
 </main>
</template>
