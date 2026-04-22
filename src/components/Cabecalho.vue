<script setup lang="ts">
import { ref } from 'vue';

const nome=ref<string>("Sofia")

</script>

<template>
  <div>
    <h1 class="text-blue-500 text-center">{{ nome }}</h1>
  </div>
</template>
