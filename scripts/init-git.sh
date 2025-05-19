#!/bin/bash

# 初始化Git仓库
git init

# 添加所有文件
git add .

# 初始提交
git commit -m "Initial commit"

# 提示用户输入GitHub仓库URL
echo "请输入您的GitHub仓库URL（例如：https://github.com/username/repo.git）:"
read REPO_URL

# 添加远程仓库
git remote add origin $REPO_URL

# 将代码推送到主分支
git push -u origin main

echo "代码已推送到GitHub仓库！"
echo "现在，请前往GitHub仓库设置（Settings > Pages）："
echo "1. 选择'GitHub Actions'作为Source"
echo "2. 等待自动部署完成"
echo "3. 您的网站将在几分钟内可用"
