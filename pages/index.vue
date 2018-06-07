<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        Hello World
      </h1>
      <ul>
        <li><nuxt-link :to="{ name:'index' }">首页</nuxt-link></li>
        <li><nuxt-link :to="{ name:'about' }">关于</nuxt-link></li>
        <li><nuxt-link :to="{ name:'news',params:{newsId:'3306'} }">新闻</nuxt-link></li>
        <li><a href="/news/1">新闻1</a></li>
        <li><a href="/news/2">新闻2</a></li>
        <li><a href="/news/three">新闻3</a></li>
      </ul>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
