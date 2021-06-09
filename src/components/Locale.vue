<template>
    <ul class="list">
        <li v-for="locale in locales" :key="locale.locale">
            <a href="#" @click="switchLocale(locale.locale, locale.language)" class="link">
                {{locale.name}}
            </a>
        </li>
    </ul>
</template>

<script>

const SUPPORTED_LOCALES = [
    {
        locale: 'en-US',
        language: 'en',
        name: 'English',
        translations: '../locales/en-US.json'
    }, 
    {
        locale: 'nl-NL',
        language: 'nl',
        name: 'Nederlands',
        translations: '../locales/nl-NL.json'
    }, 
];

export default {
    name: 'locale',
    data () {
        return {
            path: '/',
            lang: 'en',
            locales: SUPPORTED_LOCALES,
            selectedLocale : '',
        }
    },
    methods:{
        switchLocale (locale, language) {
            if (this.selectedLocale !== locale) {
                this.selectedLocale = locale;
                this.$store.dispatch('i18n/setLocale', { locale })
                this.$store.dispatch('i18n/setLanguage', { language })
            }
        },
    },
}
</script>

<style scoped>
.link{
     float:left;
     margin-left:15px
}
.list{
    float:right;
    list-style:none;
    width:auto;
    margin:0;
    padding:0
}
.list li{
    float:left;
}
</style>
