<template>
    <div>
        <h2 v-if="error.statusCode==404">404，页面不存在</h2>
        <h2 v-else>500，服务器错误</h2>
        <ul>
            <li>
                <nuxt-link :to="{name:'index'}">首页</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "error",
        props: ['error']
    }
</script>

<style scoped>

</style>