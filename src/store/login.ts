import { defineStore } from "pinia";
import { computed } from 'vue';
import { useStorage } from "@vueuse/core";

export const useLogin = defineStore("login", () => {

    const usuarioLogado = useStorage<string>('usuario_logado', "");

    function logarUsuario(nome:string) {
        usuarioLogado.value = nome;
    }

    const logado = computed(() => !!usuarioLogado.value.length);

    return {
        usuarioLogado,
        logarUsuario,
        logado
    }
})