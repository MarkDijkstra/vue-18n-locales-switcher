import { createWebHistory, createRouter} from "vue-router";
import routes from './routes.js';
import i18n, {loadLocaleMessages, setI18nLanguage} from '../plugins/i18n.js';
import store from '../store/index.js'

const languageSlug = store.getters['i18n/language'] || window.localStorage.getItem('language') ;

/**
 * Create a new router instance.
 *
 * @return {Router}
 */
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: `/${languageSlug}`
        },
        {
            path: `/:lang(${languageSlug})?`,
            component: () => import('../pages/Page.vue'),
            children: routes
        }
    ] 
});

/**
 * Global router guard.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
router.beforeEach(async (to, from, next) => {

    const language = store.getters['i18n/language'] || window.localStorage.getItem('language');
    const locale   = store.getters['i18n/locale'] || window.localStorage.getItem('locale');

    if (!i18n.global.availableLocales.includes(locale)) {
        await loadLocaleMessages(i18n, locale)
    }

    setI18nLanguage(i18n, locale, language)   

    next()

});
  
export default router;