# Vercel 部署指南

本指南将详细介绍如何将 VitePress 网站部署到 Vercel 平台。

## 📋 部署前准备

在开始部署之前，请确保你已经：

1. 完成了 VitePress 网站的开发和测试
2. 有一个 GitHub 账户并创建了仓库
3. 有一个 Vercel 账户（可以使用 GitHub 账户登录）

## 🚀 部署步骤

### 第一步：推送代码到 GitHub

如果你的代码还没有推送到 GitHub，请执行以下命令：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 重命名分支为 main（GitHub 默认分支）
git branch -M main

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/yourusername/vitepress-cs-docs.git

# 推送到 GitHub
git push -u origin main
```

### 第二步：在 Vercel 中导入项目

1. 访问 [vercel.com](https://vercel.com) 并登录
2. 点击 "New Project" 或 "Add New..." → "Project"
3. 在 "Import Git Repository" 部分找到你的仓库
4. 点击 "Import" 按钮

### 第三步：配置项目设置

Vercel 通常会自动检测到 VitePress 项目并配置构建设置。如果没有自动配置，请手动设置：

- **Framework Preset**: VitePress
- **Build Command**: `npm run docs:build`
- **Output Directory**: `docs/.vitepress/dist`
- **Node.js Version**: `18.x` 或更高

### 第四步：部署

1. 检查配置是否正确
2. 点击 "Deploy" 按钮
3. 等待部署完成（通常需要 1-2 分钟）
4. 部署完成后，Vercel 会提供一个 `.vercel.app` 域名

## 🔧 高级配置

### 自定义域名

1. 在 Vercel 项目仪表板中，点击 "Settings" 标签
2. 在左侧菜单中点击 "Domains"
3. 输入你的自定义域名
4. 按照提示配置 DNS 记录

### 环境变量

如果你的项目需要环境变量：

1. 在项目设置中点击 "Environment Variables"
2. 添加所需的变量名和值
3. 重新部署项目以应用更改

### 构建优化

项目根目录的 `vercel.json` 文件已经配置了缓存头，以提高静态资源的加载速度：

```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## 🔄 自动部署

设置完成后，每次你推送代码到 GitHub 主分支，Vercel 都会自动构建和部署新版本。这个过程通常包括：

1. 检测到代码推送
2. 安装依赖
3. 构建项目
4. 部署到全球 CDN
5. 更新域名指向

## 📊 部署状态检查

### 查看部署日志

1. 在 Vercel 项目仪表板中，点击 "Deployments" 标签
2. 点击特定的部署查看详细信息
3. 可以查看构建日志、错误信息和性能指标

### 本地预览

在部署前，你可以在本地预览生产版本：

```bash
# 构建项目
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 🐛 常见问题

### 构建失败

1. 检查 Node.js 版本是否设置为 18.x 或更高
2. 确认 `package.json` 中的构建脚本正确
3. 查看构建日志中的错误信息

### 页面显示 404

1. 检查 `base` 配置是否正确（如果部署到子路径）
2. 确认输出目录设置为 `docs/.vitepress/dist`
3. 检查路由配置是否正确

### 样式加载问题

1. 确认自定义样式文件路径正确
2. 检查 CSS 语法是否有错误
3. 清除浏览器缓存后重试

## 📈 性能优化

### 启用压缩

Vercel 自动启用 Gzip 和 Brotli 压缩，无需额外配置。

### 图片优化

1. 使用适当的图片格式（WebP、AVIF）
2. 实现懒加载
3. 使用响应式图片

### 代码分割

VitePress 默认启用代码分割，无需额外配置。

## 🔒 安全考虑

1. 不要在代码中暴露敏感信息
2. 使用环境变量存储密钥
3. 定期更新依赖项
4. 启用 HTTPS（Vercel 自动提供）

## 📝 部署清单

在部署前，请确认以下事项：

- [ ] 所有页面都能正常访问
- [ ] 链接和导航工作正常
- [ ] 响应式设计在不同设备上正常显示
- [ ] 搜索功能正常工作
- [ ] 深色/浅色模式切换正常
- [ ] 代码高亮显示正确
- [ ] 图片和资源加载正常
- [ ] 没有控制台错误

完成以上步骤后，你的 VitePress 网站就成功部署到 Vercel 了！