


module.exports = {
  "title": "弗兰林卡",
  "description": "High on life till the day we die",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "Document",
        "link": "",
        "icon": "reco-document",
        "items": [
          {
            "text": "HTML",
            "link": "/views/decument/html/",
          },
          {
            "text": "CSS",
            "link": "/views/decument/css/",
          },
          {
            "text": "Vue",
            "link": "/views/decument/vue",
          },
          {
            "text": "技术日志",
            "link": "/views/decument/学习笔记/vue3使用bootstrap/",
          },
        ]
      },

      {
        "text": " Experiments",
        "link": "/",
        "icon": "reco-api",
        "items": [
          {
            "text": "在线翻译[vue]",
            "link": "/views/demo/在线翻译/",
          },
          {
            "text": "喵眼电影[vue]]",
            "link": "/views/demo/喵眼电影/",
          },
          {
            "text": "在线翻译[微信]",
            "link": "/views/demo/微信在线翻译/",
          },
          {
            "text": "个人简历在线生成",
            "link": "/views/demo/个人简历/",
          },
      
         
        ]
      },
      {
        "text": "About",
        "link": "",
        "icon": "reco-account" 
      },
    

      {
        "text": "TimeLine",
        "link": "/timeLine/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "NPM",
            "link": "https://www.npmjs.com/~reco_luan",
            "icon": "reco-npm"
          },
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          },
          {
            "text": "简书",
            "link": "https://www.jianshu.com/u/cd674a19515e",
            "icon": "reco-jianshu"
          },
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/recoluan",
            "icon": "reco-csdn"
          },
          {
            "text": "博客圆",
            "link": "https://www.cnblogs.com/luanhewei/",
            "icon": "reco-bokeyuan"
          },
          {
            "text": "WeChat",
            "link": "https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A",
            "icon": "reco-wechat"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      },
      "type": "about",
      "tag": {
        "location": 4,
        "text": "Tag"
      },
    },
    "logo": "/hero.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "黄捷",
    "record": "功不唐捐",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  },

  
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["miku"],
        clean: true,
        modelStyle: {
          position: "fixed",
          left: "0px",
          bottom: "0px",
          opacity: "0.9",
          zIndex: 99999
        }
      }
    ],
    'nest', {
      color: '0,0,0', // color of lines, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
      pointColor: '0,0,0', // color of points, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
      opacity: 0.5, // the opacity of line (0~1), default: 0.5.
      count: 99, // the number of lines, default: 99.
      zIndex: -1 // z-index property of the background, default: -1.
    }
  ]
  
 
  // plugins: ['ribbon']


}

