# 部署到GitHub Pages指南

本文档提供了将学术网站模板部署到GitHub Pages的详细步骤。

## 准备工作

1. 确保你有一个GitHub账号
2. 在GitHub上创建一个新的仓库

## 方法一：使用GitHub Actions（推荐）

这种方法使用GitHub Actions自动构建和部署你的网站。

### 步骤

1. **创建GitHub仓库**

   在GitHub上创建一个新的仓库。仓库名称可以是任何你喜欢的名称，例如`academic-website`。

2. **初始化并推送代码**

   运行以下命令将代码推送到GitHub：

   ```bash
   # 进入项目目录
   cd academic-website-template

   # 运行初始化脚本
   ./scripts/init-git.sh
   ```

   按照提示输入你的GitHub仓库URL。

3. **启用GitHub Pages**

   - 转到你的GitHub仓库
   - 点击"Settings"（设置）
   - 在左侧菜单中找到"Pages"（页面）
   - 在"Source"（源）部分，选择"GitHub Actions"
   - 等待几分钟，GitHub Actions会自动构建并部署你的网站

4. **访问你的网站**

   成功部署后，你的网站将可以通过以下URL访问：

   ```
   https://你的用户名.github.io/仓库名称/
   ```

## 方法二：手动部署

这种方法需要手动构建网站并将其推送到GitHub的gh-pages分支。

### 步骤

1. **添加gh-pages包**

   ```bash
   bun add --dev gh-pages
   ```

2. **构建并部署**

   ```bash
   # 构建网站
   bun run build

   # 部署到GitHub Pages
   bun run deploy
   ```

3. **配置GitHub Pages**

   - 转到你的GitHub仓库
   - 点击"Settings"（设置）
   - 在左侧菜单中找到"Pages"（页面）
   - 在"Source"（源）部分，选择"Deploy from a branch"
   - 在"Branch"（分支）下拉菜单中，选择"gh-pages"
   - 点击"Save"（保存）

## 自定义域名

如果你想使用自己的域名而不是github.io域名，按照以下步骤配置：

1. **在GitHub中添加自定义域名**

   - 转到你的GitHub仓库
   - 点击"Settings"（设置）
   - 在左侧菜单中找到"Pages"（页面）
   - 在"Custom domain"（自定义域名）部分，输入你的域名（例如example.com）
   - 点击"Save"（保存）

2. **配置DNS记录**

   在你的域名注册商或DNS提供商处，添加以下记录：

   - 对于顶级域名（example.com）:
     ```
     A    @    185.199.108.153
     A    @    185.199.109.153
     A    @    185.199.110.153
     A    @    185.199.111.153
     ```

   - 对于子域名（如blog.example.com）:
     ```
     CNAME    blog    你的用户名.github.io.
     ```

3. **添加CNAME文件**

   编辑`public/CNAME`文件，添加你的域名：

   ```
   example.com
   ```

   然后重新部署网站。

## 故障排除

如果你在部署过程中遇到问题，请检查以下几点：

1. 确保GitHub Actions有权限访问你的仓库
2. 检查GitHub Actions工作流运行记录中的错误信息
3. 确保你的网站构建成功，可以通过运行`bun run build`在本地测试
4. 如果使用自定义域名，确保DNS记录已正确配置

## 更新网站

部署成功后，每次你想更新网站内容，只需：

1. 编辑相应的Markdown文件
2. 推送更改到GitHub
3. GitHub Actions会自动重新构建并部署你的网站

```bash
git add .
git commit -m "更新网站内容"
git push
```
