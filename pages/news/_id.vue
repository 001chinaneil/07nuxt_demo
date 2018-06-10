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
        },
        data(){
            return{
                title:this.$route.params.title,
            }
        },
        //独立设置head信息
        head(){
            return{
                title:this.title,
                meta:[
                    {hid:'description',name:'news',content:'This is news page'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>