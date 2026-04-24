<script setup lang="ts">
import { computed } from 'vue'
import type { Pessoa } from '../types/Pessoa';
import Aviso from './Aviso.vue';


interface Props{
  pessoa: Pessoa,
  selecao:boolean
  
}

const props = defineProps<Props>()

const nomeCompleto = computed(() => `${ props.pessoa.first_name } ${ props.pessoa.last_name }`);

const emits = defineEmits(['selecao']);

</script>

<template>
    
 <div class="flex flex-col justify-center items-center">
  <div class="bg-white rounded-xl shadow w-60 p-4 text-center">
        <img :src="props.pessoa.avatar" class="w-24 h-24 rounded-full mx-auto mb-2"/>
        <strong class="truncate block w-full">{{ nomeCompleto}}</strong>
        <p class="text-sm text-gray-500 truncate">{{ props.pessoa.email }} </p>
        
    </div>
    <button class="bg-blue-900 p-1 mt-2 rounded-md text-white font-medium" @click="$emit('selecao', props.pessoa.id)">{{ !selecao? "Selecionar": "Remover" }}</button>
    <Aviso class="flex justify-center text-sm mt-2"></Aviso>
 </div>

 
</template>

