    import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const lazyLoad = (view: string) => () => import(`../pages/${view}.vue`);

    const routes: RouteRecordRaw[] = [
        {
            path: '/',
            name: 'Home',
            component: lazyLoad('Home')
        },
        {
            path: '/equipe',
            name: 'Equipe',
            component: lazyLoad('Equipe')
        },
        {
            path: '/equipe/:id',
            name: 'Funcionario',
            component: lazyLoad('Funcionario')
        },
        {
            path: '/:pathMatch(.*)',
            component: lazyLoad('PaginaNaoEncontrada')
        },
    ]

    const router = createRouter({
        history: createWebHistory(),
        routes
    });

    export default router;