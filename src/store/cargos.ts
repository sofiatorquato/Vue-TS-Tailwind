import { defineStore } from "pinia";
import { computed } from "vue";
import { useStorage } from "@vueuse/core";

interface Cargos{
    id: number,
    cargo: string,
    nome:string
}

export const useCargos = defineStore('cargos', () => {


    const cargos = useStorage<Cargos[]>('minha_equipe', []); //estado da aplicação
        
    const adicionarCargos = (funcionario:Cargos) => {
        cargos.value = cargos.value.filter((f) => f.id !== funcionario.id)
        cargos.value.push(funcionario);
    } 

    const removerCargos = (id: number) => {
        cargos.value = cargos.value.filter((f) => f.id !== id)
    };
        
    const totalCargos = computed(() => cargos.value.length);

    return {
        adicionarCargos,
        totalCargos,
        cargos,
        removerCargos
    }
})