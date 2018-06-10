<template>
    <div>
        <h2>News Index page</h2>
        <p>newsId: {{ $route.params.newsId }}</p>
        <ul>
            <li><a href="/">Home</a></li>
            <li><nuxt-link :to="{name:'news-id',params:{id:123,title:'www.neil.com'}}">News-1</nuxt-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>