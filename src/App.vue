<template>
    <div class="main">
        <Header/>
        <div class="content__main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from './components/Header';

export default {
    components: {
        Header,
    },
};
</script>