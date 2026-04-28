<script setup lang="ts">
import { inject, type Ref } from 'vue';

const aviso = inject<Ref<string>>('aviso');

</script>

<template>
  <div>
{{ aviso }}
  </div>
</template>
