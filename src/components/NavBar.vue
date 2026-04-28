<script setup lang="ts">
import { useCargos } from '../store/cargos';
import { storeToRefs } from 'pinia';

const store = useCargos();
const {totalCargos} = storeToRefs(store);
const menus = [
    {id:1, nome:"Home", path:'/'},
    {id:2, nome:"Equipe", path:'equipe'},
]

</script>

<template>
  <div class="bg-blue-200 p-3">
    <nav class="flex justify-between items-center ">
      <span class="text-blue-900 font-bold">
        Tutorial Vue
      </span>
      Total Cargos {{ totalCargos }}
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
