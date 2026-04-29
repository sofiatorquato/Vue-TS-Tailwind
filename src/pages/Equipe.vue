<script setup lang="ts">
import { useCargos } from '../store/cargos';
import { storeToRefs } from 'pinia';

const store = useCargos();
const { cargos } = storeToRefs(store);

</script>
 <!--ajustar!! AO ENTRAR NA PAGE EQUIPE, ELE CRASHA-->
<template>
  <div class="flex justify-center text-xl">
    <h1 class="text-blue-900 font-bold">Equipe</h1>
  </div>
    
    <div v-if="cargos.length>0" class="flex flex-col gap-3 items-center mt-5">
      <div v-for="c in cargos" :key="c.id"> {{ c.cargo }} {{ c.nome }}
        <button @click="store.removerCargos(c.id)" class="bg-red-600 text-white rounded-md p-1 ml-2 cursor-pointer">Remover</button>
      </div>
    </div>

    <div v-else class="flex justify-center items-center mt-90 text-xl">
      <p class="text-red-700 font-medium">Nenhum funcionário com cargo definido</p>
    </div>
  
    <!-- <ListaUsuario/> -->
    </template>
