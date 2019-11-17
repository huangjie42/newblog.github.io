---
title: vue3.0 引用bootstrap
date: 2019-11-7
tags:
 - vue bootstrap
categories:
 -  vue3.0 引用bootstrap
---



# vue3.0 引用bootstrap


---
局部安装bootstrap

    npm install bootstrap -D

安装依赖

    npm install --save popper.js


在根目录下创建vue.config.js 文件
在 vue.config.js 文件写入以下内容：

    /*
    *Vue-CLI项目的核心配置文件
    */
    const webpack = require("webpack");
    
    module.exports = {
     configureWebpack: {
       plugins: [
         new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery",
           "window.jQuery": "jquery",
           Popper: ["popper.js", "default"]
         })
       ]
     }
    };
现在我们回到 main.js ，引入jQuery文件：

    import $ from "jquery";
    
    new Vue({
    router,
    store,
    $,
    render: h => h(App)
    }).$mount("#app");
    
在main.js 文件中引入：

    import "bootstrap/dist/css/bootstrap.css";
    import "bootstrap/dist/js/bootstrap.min.js";
搞定！！
    
    
    
