<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Usuario from './Usuario.vue'

interface Pessoa {
  id: number
  avatar: string
  email: string
  first_name: string
  last_name: string
}

const pessoas = ref<Pessoa[]>([])

const buscaDados = async () => {
  const req = await fetch('https://randomuser.me/api/?results=12')
  const response = await req.json()
  return response.results
}

onMounted(async () => {
  const dados = await buscaDados()

  pessoas.value = dados.map((item: any, index: number) => ({
    id: index + 1,
    avatar: item.picture.large,
    email: item.email,
    first_name: item.name.first,
    last_name: item.name.last
  }))
})
</script>

<template>
    <div class="grid md:grid-cols-3 gap-4 p-4">
      <Usuario
        v-for="pessoa in pessoas" :key="pessoa.id" :first_name="pessoa.first_name" :last_name="pessoa.last_name"
      />
    </div>
  </template>