<script setup lang="ts">
import { ref } from 'vue';

const cabecalho=ref<string>("Random People")

</script>

<template>

  <div class="flex justify-center items-center mx-12 my-4">
   <h1 class="text-xl text-blue-900 font-bold">{{ cabecalho}}</h1>
  </div>
</template>
