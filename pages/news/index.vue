<template>
    <div>
        <h2>News Index page</h2>
        <p>newsId: {{ $route.params.newsId }}</p>
        <ul>
            <li><a href="/">Home</a></li>
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