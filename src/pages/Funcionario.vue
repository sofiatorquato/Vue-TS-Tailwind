<script setup lang="ts">
import Usuario from '../components/Usuario.vue';
import { useFetch } from '../composables/fetch';
import { useRoute } from 'vue-router';
import { computed, ref, watch } from 'vue';
import { useCargos } from '../store/cargos';
import { useLogin } from '../store/login';

const store = useCargos();
const storeLogin = useLogin();
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

  <div>
    <button @click="storeLogin.logarUsuario(pessoa.first_name)" class="text-green-800 border border-green-800 p-2 px-15 rounded-lg hover:bg-green-800 hover:text-white cursor-pointer transition-colors">Logar</button>
  </div>
  </div>

  <div v-else class="flex justify-center items-center mt-90">
    Pessoa não encontrada
  </div>
</template>
