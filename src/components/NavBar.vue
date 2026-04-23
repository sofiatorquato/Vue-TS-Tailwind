<script setup lang="ts">

const menus = [
    {id:1, nome:"Home"},
    {id:2, nome:"Sobre"},
    {id:3, nome:"Login"}
]

</script>

<template>
  <div class="bg-blue-200 p-3">
    <nav class="flex justify-between items-center text-blue-900 font-bold">Tutorial Vue
      <div>
        <ul class="list-none p-3 flex">
        <li v-for="menu in menus" :key="menu.id" class="underline text-blue-900 px-4 font-medium"><a href="#">{{menu.nome}}</a></li>
        </ul>
      </div>
  </nav>
  </div>
 
</template>
