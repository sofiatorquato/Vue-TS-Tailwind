import { defineStore } from "pinia";
import { ref,computed } from "vue";

interface Cargos{
    id: number,
    cargo: string,
    nome:string
}

export const useCargos = defineStore('cargos', ()=>{
    const cargos = ref<Cargos[]>([]); //estado da aplicação
        
    const adicionarCargos = (funcionario:Cargos) => {
        cargos.value = cargos.value.filter((f) => f.id !== funcionario.id)
        cargos.value.push(funcionario);
    } 
        
    const totalCargos = computed(() => cargos.value.length);

    return {
        adicionarCargos,
        totalCargos,
        cargos
    }
})