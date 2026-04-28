<script setup lang="ts">
import ListaUsuario from '../components/ListaUsuario.vue';
import { useCargos } from '../store/cargos';
import { storeToRefs } from 'pinia';

const store = useCargos();
const { cargos } = storeToRefs(store);

</script>
 <!--ajustar!! AO ENTRAR NA PAGE EQUIPE, ELE CRASHA-->
<template> 
    <h1>Equipe</h1>
  <div v-for="c in cargos" :key="c.id"> {{ c.cargo }} 
    <ListaUsuario/>
  </div>
</template>
