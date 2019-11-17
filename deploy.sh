#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.huangjie42.xyz' > CNAME

git init
git config user.name "huangjie"
git config user.email "1042223602@qq.com"
git add -A
git commit -m 'deploy-coding'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
 git push -f git@huangjieblog:huangjie/blog.git master:gh-pages

cd -
