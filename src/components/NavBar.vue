<script setup lang="ts">

const menus = [
    {id:1, nome:"Home"},
    {id:2, nome:"Sobre"},
    {id:3, nome:"Login"}
]

</script>


<template>
  <nav class="p-2 flex justify-between items-center bg-blue-100">Tutorial Vue
    <ul class="flex list-none p-2 ">
        <li v-for="menu in menus" :key="menu.id" class="underline text-blue-900 px-4"><a href="#">{{menu.nome}}</a></li>
        
    </ul>
  </nav>
</template>
