import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "MindKernel",
    description: "一份全面的计算机科学自学指南，包含学习路线、工具推荐、经典书籍和高质量课程资源",
    lang: 'zh-CN',
    lastUpdated: true,

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
            {text: '首页', link: '/'},
        ],

        sidebar: [
            {
                text: '起步',
                items: [
                    {text: '开始使用', link: '/guide'},
                    {text: '学习规划', link: '/study-plan'}
                ]
            },

            {
                text: '计算机基础',
                collapsed: true,
                items: [
                    {
                        text: '计算机网络',
                        collapsed: true,
                        items: [
                            {
                                text: '物理层',
                                collapsed: true,
                                items: []
                            },
                            {
                                text: '数据链路层',
                                collapsed: true,
                                items: []
                            },
                            {
                                text: '网络层',
                                collapsed: true,
                                items: [
                                    {text: 'TCP协议和UDP协议', link: '/tcp-udp'},
                                ]
                            },
                            {
                                text: '传输层',
                                collapsed: true,
                                items: []
                            },
                            {
                                text: '应用层',
                                collapsed: true,
                                items: [
                                    {text: 'HTTP协议', link: '/http'},
                                ]
                            },
                        ]
                    },
                    {
                        text: '操作系统',
                        collapsed: true,
                        items: []
                    },
                    {
                        text: '数据结构',
                        collapsed: true,
                        items: []
                    },
                    {
                        text: '计算机组成原理',
                        collapsed: true,
                        items: []
                    },
                ]
            },

            {
                text: '主流技术',
                collapsed: true,
                items: []
            },

            {
                text: '架构思维',
                collapsed: true,
                items: []
            },

            {
                text: '沉淀',
                collapsed: true,
                items: []
            },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/3218085097/vitepress-cs-docs'}
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
            pattern: 'https://github.com/3218085097/vitepress-cs-docs/tree/master/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        // 页脚
        footer: {
            message: '基于 MIT 许可发布',
            copyright: '版权所有 © 2026-present MindKernel'
        },

        // 深色模式切换
        darkModeSwitch: true,

        // 显示目录
        outline: {
            label: '页面导航'
        }
    }
})
