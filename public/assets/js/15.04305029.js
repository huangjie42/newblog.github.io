(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{369:function(n,e,t){"use strict";t.r(e);var r=t(0),o=Object(r.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"vue3-0-引用bootstrap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue3-0-引用bootstrap"}},[n._v("#")]),n._v(" vue3.0 引用bootstrap")]),n._v(" "),t("hr"),n._v(" "),t("p",[n._v("局部安装bootstrap")]),n._v(" "),t("pre",[t("code",[n._v("npm install bootstrap -D\n")])]),n._v(" "),t("p",[n._v("安装依赖")]),n._v(" "),t("pre",[t("code",[n._v("npm install --save popper.js\n")])]),n._v(" "),t("p",[n._v("在根目录下创建vue.config.js 文件\n在 vue.config.js 文件写入以下内容：")]),n._v(" "),t("pre",[t("code",[n._v('/*\n*Vue-CLI项目的核心配置文件\n*/\nconst webpack = require("webpack");\n\nmodule.exports = {\n configureWebpack: {\n   plugins: [\n     new webpack.ProvidePlugin({\n       $: "jquery",\n       jQuery: "jquery",\n       "window.jQuery": "jquery",\n       Popper: ["popper.js", "default"]\n     })\n   ]\n }\n};\n')])]),n._v(" "),t("p",[n._v("现在我们回到 main.js ，引入jQuery文件：")]),n._v(" "),t("pre",[t("code",[n._v('import $ from "jquery";\n\nnew Vue({\nrouter,\nstore,\n$,\nrender: h => h(App)\n}).$mount("#app");\n')])]),n._v(" "),t("p",[n._v("在main.js 文件中引入：")]),n._v(" "),t("pre",[t("code",[n._v('import "bootstrap/dist/css/bootstrap.css";\nimport "bootstrap/dist/js/bootstrap.min.js";\n')])]),n._v(" "),t("p",[n._v("搞定！！")])])}),[],!1,null,null,null);e.default=o.exports}}]);