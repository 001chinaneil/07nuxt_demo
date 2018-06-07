<template>
    <p>newsId: {{ $route.params.id }}</p>
    <!--<p><nuxt-link :to="{name:'index'}">回首页</nuxt-link></p>-->
</template>

<script>
    export default {
        name: "_id",
        validate({params}){
            //必须是数字
            return /^\d+$/.test(params.id);
        }
    }
</script>

<style scoped>

</style>