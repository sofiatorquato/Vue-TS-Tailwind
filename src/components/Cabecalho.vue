<script setup lang="ts">
import { useLogin } from '../store/login';
import { storeToRefs } from 'pinia';

const store = useLogin();
const { usuarioLogado,logado } = storeToRefs(store);

</script>

<template>

  <div class="flex justify-center items-center mx-12 my-4">
   <h1 class="text-xl text-blue-700 font-bold" v-if="logado">Bem-vindo(a), {{ usuarioLogado }}</h1>
  </div>
</template>
