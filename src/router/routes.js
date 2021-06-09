import i18n from '../plugins/i18n.js'

const { t } = i18n.global;

function page (path) {
    return () => import(/* webpackChunkName: '' */ `../pages/${path}`).then(m => m.default || m)
}

const routes = [
    { 
        path: t('routes.path.home'), 
        name: 'home', 
        component: page('Home.vue') 
    },
    { 
        path: t('routes.path.about'), 
        name: 'about', 
        component: page('About.vue')
    },
    { 
        path: t('routes.path.users'), 
        name: 'users', 
        component: page('Users.vue')
    },
    { 
        path: ":catchAll(.*)", 
        component: page('Error.vue'), 
    },
];

export default routes;