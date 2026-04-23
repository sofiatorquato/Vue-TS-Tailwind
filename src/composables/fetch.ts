import { ref, onBeforeMount } from 'vue';

export function useFetch() {
    const url = ref<string>('https://randomuser.me/api/?results=20')
    const data = ref<any>(null);
    const error = ref<string>('');
    const loading = ref <boolean> (true);


    const buscaDados = async () => {
        try {
            const req = await fetch(url.value)
            const response = await req.json()
            data.value = response.results.map((item: any, index: number) => ({
                id: index + 1,
                avatar: item.picture.large,
                email: item.email,
                first_name: item.name.first,
                last_name: item.name.last,
            }));
        }
        catch (erro) {
            error.value = "Erro ao buscar dados"
        }
        finally {
            loading.value = false;
        }
    };

    onBeforeMount(async () => {
        await buscaDados();
    });

    return {
        data,
        error,
        loading
    }
}

