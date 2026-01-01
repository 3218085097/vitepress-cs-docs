import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CS自学指南",
  description: "一份全面的计算机科学自学指南，包含学习路线、工具推荐、经典书籍和高质量课程资源",
  lang: 'zh-CN',
  
  // Markdown 配置
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
  
  // 代码高亮配置
  highlight: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/guide' },
      { text: '学习规划', link: '/study-plan' },
      { text: '必学工具', link: '/tools' },
      { text: '经典书籍', link: '/books' },
      { text: '课程资源', link: '/courses' }
    ],

    sidebar: [
      {
        text: '入门指南',
        items: [
          { text: '开始使用', link: '/guide' },
          { text: '学习规划', link: '/study-plan' }
        ]
      },
      {
        text: '核心资源',
        items: [
          { text: '必学工具', link: '/tools' },
          { text: '经典书籍', link: '/books' },
          { text: '课程资源', link: '/courses' }
        ]
      },
      {
        text: '进阶学习',
        items: [
          { text: 'CS61A 入门', link: '/cs61a' },
          { text: '数据结构与算法', link: '/dsa' },
          { text: '操作系统', link: '/os' },
          { text: '计算机网络', link: '/network' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    
    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    
    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2024-present CS自学指南'
    },
    
    // 深色模式切换
    darkModeSwitch: true,
    
    // 显示目录
    outline: {
      label: '页面导航'
    }
  }
})
