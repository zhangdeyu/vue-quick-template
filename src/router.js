const routes = [
    {
        path: '',
        component: resolve => {
            require.ensure([], () => resolve(require('./vue/Index.vue')), 'Index');
        }
    },
    {
        path: '/index',
        component: resolve => {
            require.ensure([], () => resolve(require('./vue/Index.vue')), 'Index');
        }
    }
];

export default routes;