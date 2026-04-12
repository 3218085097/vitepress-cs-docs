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

    // @ts-ignore
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
                collapsed: false,
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
                                items: []
                            },
                            {
                                text: '传输层',
                                collapsed: true,
                                items: []
                            },
                            {
                                text: '应用层',
                                collapsed: true,
                                items: []
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
                text: '就业方向',
                collapsed: false,
                items: []
            },

            {
                text: '架构思维',
                collapsed: false,
                items: []
            },

            {
                text: '自我提升',
                collapsed: false,
                items: [
                    {
                        text: '努力心法',
                        collapsed: true,
                        items: [
                            {text: '如何看待努力', link: '/mind-methods/how-to-see-efforts.md'},
                            {text: '应试心法', link: '/mind-methods/exam-taking mindset.md'},
                            {text: '英语素养提升', link: '/mind-methods/eng-learn-through-web-reading-recommendation.md'},
                            {text: 'comfort first', link: '/mind-methods/comfort-first.md'},
                        ]
                    },
                    {
                        text: '有感而发',
                        collapsed: true,
                        items: [
                            {text: '2026.3.24', link: '/daily-realization/daily-sudden-realization-2026.3.24.md'},
                            {text: '2026.3.25', link: '/daily-realization/daily-sudden-realization-2026.3.25.md'},
                            {text: '2026.3.27', link: '/daily-realization/daily-sudden-realization-2026.3.27.md'},
                            {text: '2026.3.28', link: '/daily-realization/daily-sudden-realization-2026.3.28.md'},
                            {text: '2026.3.29', link: '/daily-realization/daily-sudden-realization-2026.3.29.md'},
                            {text: '2026.3.29-2', link: '/daily-realization/daily-sudden-realization-2026.3.29-2.md'},
                            {text: '2026.3.31', link: '/daily-realization/daily-sudden-realization-2026.3.31.md'},
                            {text: '2026.4.1', link: '/daily-realization/daily-sudden-realization-2026.4.1.md'},
                            {text: '2026.4.2', link: '/daily-realization/daily-sudden-realization-2026.4.2.md'},
                            {text: '2026.4.3', link: '/daily-realization/daily-sudden-realization-2026.4.3.md'},
                            {text: '2026.4.6', link: '/daily-realization/daily-sudden-realization-2026.4.6.md'},
                            {text: '2026.4.7', link: '/daily-realization/daily-sudden-realization-2026.4.7.md'},
                            {text: '2026.4.12', link: '/daily-realization/daily-sudden-realization-2026.4.12.md'},
                        ]
                    },
                    {
                        text: '竞赛指南',
                        collapsed: true,
                        items: []
                    },
                    {
                        text: '考证指南',
                        collapsed: true,
                        items: [
                            {
                                text: '教资指南',
                                collapsed: true,
                                items: []
                            },
                            {
                                text: '软考指南',
                                collapsed: true,
                                items: []
                            },
                        ]
                    },
                    {
                        text: '副业指南',
                        collapsed: true,
                        items: [
                            {
                                text: '金融基础',
                                collapsed: true,
                                items: []
                            },
                        ]
                    },
                ]
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
