<script setup lang="ts">
import { useCargos } from '../store/cargos';
import { storeToRefs } from 'pinia';

const store = useCargos();
const {totalCargos} = storeToRefs(store);
const menus = [
    {id:1, nome:"Home", path:'/'},
    {id:2, nome:"Equipe", path:'/equipe'},
]

</script>

<template>
  <div class="bg-blue-200 p-3">
    <nav class="flex items-center justify-between mx-20">
      <span class="text-blue-900 font-bold text-xl">
        <a href="/">
          Tutorial Vue
        </a>
      </span>
      <div class="ml-19 text-blue-700 font-medium">
        Total Cargos: {{ totalCargos }}
      </div>
      
      <div>
        <ul class="list-none p-3 flex">
        <li v-for="menu in menus" :key="menu.id" class="underline text-blue-900 px-4 font-medium">
          <router-link :to="menu.path">{{ menu.nome }}</router-link>
        </li>
        </ul>
      </div>
  </nav>
  </div>
 
</template>
