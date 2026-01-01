# CS自学指南文档网站 - 运行说明

本文档提供了关于如何运行和维护 CS自学指南文档网站的详细说明。

## 🚀 快速开始

### 环境要求

- Node.js 18 或更高版本
- npm 或 yarn 包管理器

### 安装与运行

1. **克隆项目**
   ```bash
   git clone https://github.com/3218085097/vitepress-cs-docs.git
   cd vitepress-cs-docs
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run docs:dev
   ```

4. **访问网站**
   打开浏览器访问 http://localhost:5173（或控制台显示的其他端口）

### 生产环境部署

1. **构建静态文件**
   ```bash
   npm run docs:build
   ```

2. **预览构建结果**
   ```bash
   npm run docs:preview
   ```

3. **部署**
   将 `docs/.vitepress/dist` 目录下的文件部署到你的静态文件服务器

## 📁 项目结构

```
vitepress-cs-docs/
├── docs/                       # 文档源文件
│   ├── .vitepress/            # VitePress 配置
│   │   ├── config.mts         # 网站配置
│   │   └── theme/             # 自定义主题
│   │       ├── index.ts       # 主题入口
│   │       └── custom.css     # 自定义样式
│   ├── index.md               # 首页
│   ├── guide.md               # 使用指南
│   ├── study-plan.md          # 学习规划
│   ├── tools.md               # 必学工具
│   ├── books.md               # 经典书籍
│   ├── courses.md             # 课程资源
│   ├── cs61a.md               # CS61A 入门
│   ├── api-examples.md        # API 示例
│   └── markdown-examples.md   # Markdown 示例
├── package.json               # 项目配置
└── README.md                  # 项目说明
```

## 🛠️ 开发指南

### 添加新页面

1. 在 `docs/` 目录下创建新的 Markdown 文件
2. 在 `docs/.vitepress/config.mts` 中的 `sidebar` 配置中添加页面链接
3. 如需在导航栏显示，在 `nav` 配置中添加链接

### 修改网站配置

主要配置文件：`docs/.vitepress/config.mts`

- `title`：网站标题
- `description`：网站描述
- `nav`：导航栏配置
- `sidebar`：侧边栏配置
- `themeConfig`：主题配置

### 自定义样式

自定义样式文件：`docs/.vitepress/theme/custom.css`

可以修改颜色、字体、布局等样式。

### 主题定制

主题入口文件：`docs/.vitepress/theme/index.ts`

可以扩展默认主题或创建完全自定义的主题。

## 🔧 常用命令

- `npm run docs:dev` - 启动开发服务器（支持热重载）
- `npm run docs:build` - 构建生产环境静态文件
- `npm run docs:preview` - 预览构建结果

## 📝 内容编辑指南

### Markdown 语法

VitePress 支持 GitHub Flavored Markdown 语法，包括：

- 代码块和语法高亮
- 表格
- 任务列表
- 脚注
- 自定义容器（提示、警告等）

### 自定义容器

```markdown
::: tip 提示
这是一个提示
:::

::: warning 警告
这是一个警告
:::

::: danger 危险
这是一个危险提示
:::
```

### 代码高亮

使用三个反引号包围代码，并指定语言：

```javascript
function hello() {
  console.log("Hello, world!");
}
```

### Vue 组件

可以在 Markdown 中直接使用 Vue 组件：

```vue
<Counter :initial="10" />
```

## 🌐 部署选项

### Vercel（推荐）

Vercel 是一个优秀的静态网站托管平台，非常适合 VitePress 网站部署。

#### 自动部署（推荐）

1. **将代码推送到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/vitepress-cs-docs.git
   git push -u origin main
   ```

2. **在 Vercel 中导入项目**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "New Project"
   - 导入你的 GitHub 仓库
   - Vercel 会自动检测到 VitePress 项目并配置构建设置

3. **配置构建设置**
   - **Framework Preset**: VitePress
   - **Build Command**: `npm run docs:build`
   - **Output Directory**: `docs/.vitepress/dist`
   - **Node.js Version**: `18.x` 或更高

4. **部署**
   - 点击 "Deploy" 按钮
   - 等待部署完成，Vercel 会提供一个 `.vercel.app` 域名

#### 手动配置

如果自动检测失败，可以手动配置：

1. 在项目根目录创建 `vercel.json` 文件（已创建）
2. 确保项目根目录有 `package.json` 文件（已存在）
3. 在 Vercel 项目设置中配置：
   - **Build Command**: `npm run docs:build`
   - **Output Directory**: `docs/.vitepress/dist`
   - **Node.js Version**: `18.x`

#### 自定义域名

1. 在 Vercel 项目设置中点击 "Domains"
2. 添加你的自定义域名
3. 按照提示配置 DNS 记录

#### 环境变量

如果需要配置环境变量：

1. 在 Vercel 项目设置中点击 "Environment Variables"
2. 添加所需的环境变量

### Netlify

1. 将代码推送到 GitHub
2. 在 Netlify 中创建新站点
3. 配置构建命令：`npm run docs:build`
4. 配置发布目录：`docs/.vitepress/dist`

### GitHub Pages

1. 在 GitHub 仓库设置中启用 GitHub Pages
2. 选择源为 `gh-pages` 分支
3. 使用 GitHub Actions 自动构建和部署

示例 GitHub Actions 工作流：

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run docs:build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./docs/.vitepress/dist
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🆘 常见问题

### Q: 如何修改网站主题颜色？

A: 编辑 `docs/.vitepress/theme/custom.css` 文件中的 CSS 变量。

### Q: 如何添加新的导航项？

A: 在 `docs/.vitepress/config.mts` 文件的 `nav` 数组中添加新项。

### Q: 如何自定义首页？

A: 编辑 `docs/index.md` 文件，参考 VitePress 官方文档了解首页配置选项。

### Q: 如何添加自定义字体？

A: 在 `docs/.vitepress/theme/custom.css` 中添加 `@import` 语句引入字体文件。

### Q: 如何启用评论功能？

A: 可以集成第三方评论系统，如 Gitalk、Valine 等，在主题文件中添加相应组件。

## 📚 相关资源

- [VitePress 官方文档](https://vitepress.dev/)
- [Vue 3 文档](https://vuejs.org/)
- [Markdown 语法指南](https://www.markdownguide.org/)

---

如有其他问题，请提交 Issue 或联系项目维护者。