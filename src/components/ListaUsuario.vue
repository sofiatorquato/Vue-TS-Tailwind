<script setup lang="ts">
import { ref,computed } from 'vue'
import Usuario from './Usuario.vue'
import { provide } from 'vue'
import { useFetch } from '../composables/fetch'

const { data: pessoas, error, loading } = useFetch()

const aviso = ref<string>("Em caso de dúvidas, contate o suporte");
const idsSelecao = ref<number[]>([])


provide("aviso", aviso);


const adicionaSelecao = (e: number) => {
  if (idSelecionado(e)) {
    idsSelecao.value = idsSelecao.value.filter((x) => x !== e)
    return;
  }
  idsSelecao.value.push(e);
  
}

const pessoasSelecionadas = computed(() => {
  if (!pessoas.value) return [];
 return  pessoas.value.filter((x:any) => idSelecionado(x.id));
})

const idSelecionado = (id:number) => {
  return idsSelecao.value.includes(id);
 }

</script>

<template>
    <div class="flex justify-center items-center gap-4 flex-wrap ">
      <span v-for="pm in pessoasSelecionadas" :key="pm.id" class="bg-blue-300 p-2 rounded-lg ">
        {{ pm.first_name }}
      </span>
    </div>

    <div v-if="loading" class="flex justify-center items-center mt-100">
      <h3 class="text-xl">Carregando...</h3>
    </div>

    <div class="grid md:grid-cols-4 gap-4 p-4">
      <Usuario v-for="pessoa in pessoas" :key="pessoa.id" :pessoa :selecao="idSelecionado(pessoa.id)"
      @selecao="adicionaSelecao" v-if="!error"/>
      <div v-else>
        {{ error }}
      </div>
    </div>

  </template>