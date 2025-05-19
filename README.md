# 学术网站模板

这是一个基于markdown的学术网站模板，将内容与表现分离，便于维护和更新。

## 目录结构

```
├── contents           # 内容文件夹（markdown格式）
│   ├── config.yml     # 网站配置文件
│   ├── home.md        # 首页内容
│   ├── group.md       # 团队页面内容
│   ├── publications.md # 出版物页面内容
│   ├── services.md    # 服务页面内容
│   └── experience.md  # 经历页面内容
├── static             # 静态资源
│   ├── assets         # 资源文件夹
│   │   └── img        # 图片文件夹
│   ├── css            # CSS样式文件
│   └── js             # JavaScript文件
├── index.html         # 首页HTML模板
├── group.html         # 团队页面HTML模板
├── Publications.htm   # 出版物页面HTML模板
├── Services.htm       # 服务页面HTML模板
└── experience.html    # 经历页面HTML模板
```

## 如何使用

### 修改内容

1. 所有内容都存储在 `contents` 文件夹下的markdown文件中
2. 要修改网站内容，只需编辑相应的markdown文件
3. markdown文件开头的YAML前言用于设置页面标题和布局

### 配置网站

网站全局设置存储在 `contents/config.yml` 文件中，包括：

- 网站标题、副标题和描述
- 导航菜单项
- 社交媒体链接
- 设计颜色主题
- 页脚设置

### 更换图片

要更换图片，只需替换 `static/assets/img` 文件夹中的相应图片文件：

- `photo.jpg` - 个人照片
- `background.jpeg` - 背景图片（如果有）

## 开发

### 安装依赖

```bash
bun install
```

### 启动开发服务器

```bash
bun run dev
```

### 构建生产版本

```bash
bun run build
```

## 部署到GitHub Pages

### 方法一：使用GitHub Actions（推荐）

1. 将代码推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages，选择"GitHub Actions"作为源
3. GitHub Actions会自动构建并部署网站

### 方法二：手动部署

1. 构建网站：`bun run build`
2. 将 `dist` 文件夹中的内容推送到 `gh-pages` 分支

```bash
# 安装gh-pages工具
bun add --dev gh-pages

# 添加部署脚本到package.json
# "deploy": "gh-pages -d dist"

# 构建并部署
bun run build
bun run deploy
```

## 自定义域名

如果你有自己的域名，可以按照以下步骤配置：

1. 在GitHub仓库的`Settings > Pages`中添加自定义域名
2. 在你的DNS提供商处添加一条CNAME记录，指向`你的用户名.github.io`
3. 在项目根目录下创建一个名为`CNAME`的文件，内容为你的域名
