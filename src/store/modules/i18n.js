import * as types from '../mutation-types.js'

// using LS as a backup

const initLocale = (() => {
    let locale = window.localStorage.getItem('locale')
    if(locale == null || locale == "undefined"){
        window.localStorage.setItem('locale', 'en-US')
    }
    return locale
})();

const initLanguage = (() => {
    let lang = window.localStorage.getItem('language') 
    if(lang == null || lang == "undefined"){
        window.localStorage.setItem('language', 'en')
    }
    return lang
})();

export const state = {
    locale: initLocale,
    language: initLanguage,
}

export const getters = {
    locale: state => state.locale,
    language: state => state.language
}

export const mutations = {
    [types.SET_LOCALE] (state, { locale }) {
        state.locale = locale ;
        window.localStorage.setItem('locale', locale )
    },
    [types.SET_LANGUAGE] (state, { language }) {
        state.language = language;
        window.localStorage.setItem('language', language )
    }
}

export const actions = {
    setLocale ({ commit }, { locale }) {
        commit(types.SET_LOCALE, { locale })
    },
    setLanguage({ commit }, { language }) {
        commit(types.SET_LANGUAGE, { language })
    }
}