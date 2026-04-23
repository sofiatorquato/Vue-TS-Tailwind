<script setup lang="ts">
import { inject } from 'vue';

const aviso = inject('aviso');


</script>

<template>
  <div class="">
{{ aviso }}
  </div>
</template>
