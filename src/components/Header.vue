<template>
  <div class="nav">   
        <ul class="menu">
            <li v-for="item in menu" :key="item.label">
                <linky :to="item.route"> 
                    {{ $t(item.label) }}
                </linky>
            </li>
        </ul> 
        <locale/>
  </div>
</template>

<script>
import locale from './Locale';
import linky from './Linky';

export default {
    name:'Header',
    components: {
        locale,
        linky
    },
    props:['to'],
    computed:{
        langSlug () {   
            return this.$store.getters['i18n/language'] || 'en'
        },
        menu () {
            return [
                {
                    label: 'routes.label.home',
                    route: 'routes.path.home',
                },
                {
                    label: 'routes.label.about',
                    route: 'routes.path.about',
                },
                {
                    label: 'routes.label.users',
                    route: 'routes.path.users',
                },  
            ]
        } 
    }
}
</script>

<style scoped>
.nav{
  height: 30px;
  padding:30px;
  background-color:#eee;
}
.menu{
    float:left;
    list-style:none;
    width:auto;
    margin:0;
    padding:0
}
.menu li{
    float:left;
    margin-right:15px;
}
</style>
