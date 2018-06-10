//Nuxt.JS 笔记
/*
* 1.后续3步走，第一步Nuxt.JS Weex;   第二步Koa;   第三步Vue2+Koa
* */

//第一节 Nuxt环境搭建和Hello World
/*
* 1.安装vue-cli，安装nuxt ( vue init nuxt/starter )，npm install (安装依赖包)，npm run dev (启动)
* */

//第二节 Nuxt目录结构详讲
/*
* 1.略
* */

//第三节 Nuxt常用配置项
/*
* 1.配置端口和主机地址 [是json格式，不是javascript，直接从官网复制的就可以用，自己写的就不行]
*   eg:
*   "config": {
    "nuxt": {
      "host": "0.0.0.0",
      "port": "3333"
    }
    },
  2.公共CSS样式文件，比如是assets/css/normailze.css，在里面写好公共样式后，在nuxt.config.js里面进行引用
    eg: css: ['~assets/css/normailze.css']  (单独一项配置项)
  3.服务端渲染:
    当运行 nuxt 命令时，会启动一个支持 热加载 和 服务端渲染（基于Vue.js的 vue-server-renderer 模块）
    的开发服务器。
* */

//第四节 Nuxt的路由配置和参数传递
/*
* 1.工作: 如何正确面对需求？
*   a.先心中默念3秒，1，2，3。
*   b.完完整整把需求按自己的方式梳理输出一遍。
*   c.把难点和模糊点标注出来，做到心中有数，一一和产品碰，有意识的规避风险和再次确认需求。
*   d.切忌，盲目答应需求。#这个，我先想想~~#
* 2.正常的工作节奏:
*   a.清爽，减少外在需求的打扰和确认。
*   b.自在，可以一定程度上，自我发挥创造。
*   c.自我驱动，开发任务需求的节奏是自我驱动的，尽量不能受外在的力量而摇摆不定。
* 3.在pages里新建文件夹，在文件夹里新建index.vue文件，然后就可以直接用a链接，href='/about' 指向了。
* 4.尽量用nuxt-link标签，eg: <nuxt-link :to="{name: 'about'}"></nuxt-link>
* 5.通过路由链接传递参数
*   eg:发送 <nuxt-link :to="{name:'about',params:{newsId:'3306'}}"></nuxt-link>
*      接收 $route.params.newsId
* */

//第五节 Nuxt的动态路由和参数校验
/*
* 1.在pages下对应的文件夹下新建_id.vue文件，匹配动态页面，比如新闻详情页。
* 2.接收同上
* 3.参数校验: 使用validate(params){ //内部校验逻辑 }
* */

//第六节 Nuxt的路由动画效果
/*
* 1.全局路由动画: 默认使用pages进行设置。使用transition属性
*   eg: .page-enter-active, .page-leave-active{}
*       .page-enter, .page-leave-active{}
* 2.页面单独设置路由动画: 类似全局路由设置，只不过，在页面底部的默认设置中，transition:'test'，
*   eg: .test-enter-active,.test-leave-active{}
*       .page-enter,.page-leave-active{}
* 3.page 和 test居然是个参数。
* 4.名为程朱，暗效申韩，杂以黄老。(一切以达到目的为目标)
*
* */

//第七节 Nuxt的默认模板和默认布局
/*
* 1.处理每个页面都有的部分内容，可以采用公共组件 或者 默认模板解决，公共组件更灵活但是需要手动引入页面，
*   默认模板更简单但是是每个页面都会有。
* 2.在项目根目录新建app.html即可。
* 3.{{HEAD}}就是读取的是nuxt.config.js里面的信息，{{APP}}就是pages文件夹下的主体页面了，
*   其他部分就是每个页面都有的部分。HEAD APP必须大写，否则报错。
* 4.总结: 单页面应用就是全站只有个基本页面(pages下的index.vue文件)，
*   其他页面结构是以组件的形式拼合在一起的，它们之间用nuxt-link链接起来，可以传递参数
*   联想: 现在就差怎么打包部署了。
* 5.默认布局主要针对的是全站统一布局使用，它在layouts下的default.vue文件，
*   其中<nuxt/>相当于每个页面的内容，模版只能定制<template>里的内容，跟布局有关系。
* */

//第八节 Nuxt的错误页面和个性meta设置
/*
* 1.404页面设置，直接在layouts文件夹下，新建error.vue文件。
* 2.根据error.statusCode==404来做判断的
* 3.谨记: 需要在底部的export default {
*       props: ['error']
*   }
* 4.pages/news/index.vue 相当于 列表页；同目录的_id.vue相当于 详情页；
* 5.个性meta的设置，通过链接把title传递过去，在详情页接收并赋值给meta值，其中为了可以覆盖head中的meta值，
*   必须要设置一个相同的hid值，这样就会把默认的head的meta覆盖掉。
* */

//第九节 asyncData方法
/*
* 1.Nuxt页面返回的是一个html页面，真是的服务端渲染。
* 2.利用的是axios环境包，在页面底部的export default里面的asyncData方法里面进去页面初始化前的数据请求
* 3.最新潮的异步方法: async...await...
* */

//第十节 静态资源和打包
/*
* 1.静态资源例如图片，放到static目录下，引用的时候直接用  ~  号就可以定位到根目录，省去了相对路径的指引。
* 2.在根目录下运行: npm run generate 进行打包，会出现dist文件夹，把此文件夹放到线上服务器根目录就OK了。
* 3.天啊！前端完全和后端分开来了，后续发布代码的过程，瓦力等等流程。
* */








