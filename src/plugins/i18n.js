import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'

/**
 * Set i18n locale value include html lang tag
 *
 * @param {object} i18n
 * @param {String} locale
 * @param {String} lang
 */
export const setI18nLanguage = (i18n, locale, lang) => {
    if (i18n.mode === 'legacy') {
      i18n.global.locale = locale
      i18n.locale = locale
    } else {
      i18n.global.locale.value = locale
    }
    document.querySelector('html').setAttribute('lang', lang)
}

/**
 * Load the locale json file and set this as active
 *
 * @param {object} i18n
 * @param {String} locale
 */
export const loadLocaleMessages = async (i18n, locale) => {
    const messages = await import(
      /* webpackChunkName: "locale-[request]" */ `../locales/${locale}.json`
    )
    i18n.global.setLocaleMessage(locale, messages.default)
    
    return nextTick();
}

/**
 * Create a new i18n instance.
 *
 * @return {I18n}
 */
const i18n = createI18n({
    formatFallbackMessages: true,
    silentFallbackWarn: true,
    silentTranslationWarn: true,
    locale: 'en-US',
    fallbackLocale: 'en-US',
    messages: {
        "en-US": require('./../locales/en-US.json')
    }
});

export default i18n