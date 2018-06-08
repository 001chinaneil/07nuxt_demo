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
* 1.全局路由动画: 默认使用pages进行设置。
*   eg: .page-enter-active, .page-leave-active{}
*       .page-enter, .page-leave-active{}
* */