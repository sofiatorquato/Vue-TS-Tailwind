<script setup lang="ts">
import { reactive, ref, computed } from 'vue'

//4:58 - video de props
interface Props{
    first_name: string,
    last_name: string,
}

const props = defineProps<Props>()

const nomeCompleto = computed(() => `${ props.first_name } ${ props.last_name }`);

const usuario = ref<number>(0)

interface Pessoa {
  avatar: string
  email: string
  first_name: string
  last_name: string
}

const pessoa = reactive<Pessoa>({
  avatar: '',
  email: '',
  first_name: '',
  last_name: ''
})


</script>

<template>
    
 <div class="flex flex-col justify-center items-center">
    <div v-for="pessoa in pessoas" :key="pessoa.id" class="bg-white rounded-xl shadow p-4 text-center">
        <img :src="pessoa.avatar" class="w-24 h-24 rounded-full mx-auto mb-2"/>
        <strong>{{ pessoa.first_name }} {{ pessoa.last_name }} </strong>
        <p class="text-sm text-gray-500">{{ pessoa.email }} </p>
    </div>
 </div>
 
</template>

