<script setup lang="ts">
import Usuario from '../components/Usuario.vue';
import { useFetch } from '../composables/fetch';
import { useRoute } from 'vue-router';
import { computed, ref, watch } from 'vue';
import { useCargos } from '../store/cargos';

const store = useCargos();

const {adicionarCargos} = store;

const route = useRoute();

const { data, loading } = useFetch(); 

const cargoSelecionado = ref<string>('');

const cargos: string[] = ["Gerência", "Supervisão", "Operacional"];

const pessoa = computed(() => {
  return data.value?.find((p: { id: number; }) => p.id === Number(route.params.id));
});

watch(cargoSelecionado, (novoCargo) => {
  const { id, first_name: nome } = pessoa.value;
  const funcionario = { id, nome, cargo: novoCargo };
  adicionarCargos(funcionario)
})

</script>

<template>
  <div v-if="loading" class="flex justify-center items-center mt-100">
    Carregando...
  </div>

  <div v-else-if="pessoa" class="flex flex-col items-center gap-4">
  <Usuario :pessoa="pessoa"/>
  <select v-model="cargoSelecionado" class="cursor-pointer border border-blue-900 text-blue-900 rounded-lg p-2">
    <option disabled value="">Selecione o cargo</option>
    <option v-for="c in cargos" :value="c" :key="c">{{ c }}</option>
  </select>
  </div>

  <div v-else class="flex justify-center items-center mt-100">
    Pessoa não encontrada
  </div>
</template>
