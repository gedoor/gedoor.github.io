#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd build

# 如果是发布到自定义域名
# echo 'gedoor.com' > CNAME

# git init
# git config user.name gedoor
# git config user.email gedoor@gmail.com
# git add -A
# git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@gedoor:gedoor/gedoor.github.io.git master:gh-pages

cd -

