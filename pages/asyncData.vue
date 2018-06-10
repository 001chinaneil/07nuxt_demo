<template>
    <div>
        <ul>
            <li>姓名：{{info.name}}</li>
            <li>年龄：{{ info.age }}</li>
            <li>兴趣：{{ info.interest }}</li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        name: "async-data",
        data(){
            return{
                name: "hello world"
            }
        },
        async asyncData(){
            // return axios.get('https://api.myjson.com/bins/10qbxf')
            //     .then((res) => {
            //         console.log(res);
            //         return {
            //             info: res.data
            //         };
            // });
            let {data} = await axios.get('https://api.myjson.com/bins/10qbxf');
            return {
                info: data
            }
        }
    }
</script>

<style scoped>

</style>