<template>
    <router-link :to="getTo">
        <slot />
    </router-link>
</template>

<script>
export default {
    name: 'linky',
    props: ["to"],
    methods: {
    },
    computed : {
        getTo() {
            const language = this.currentLanguage
            
            let url
            let page = this.$t(this.to);

            if (page == '/' || page.length < 4) {    
                url = `/${language}`
            } else { 
                url = `/${language}/${page.replace(/^\/|\/$/g, "")}`
            }

            return url
       },
       currentLanguage () {
           return this.$store.getters['i18n/language']
       }
    }
}
</script>
