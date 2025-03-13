

module.exports = {
    //base: '/DynamoSpace/',
    title: "满满Dynamo",

    extendMarkdown(md) {
        md.set({ html: true }); // 启用HTML支持
        md.use(require('markdown-it-katex')); // 使用markdown-it-katex插件
      },

    head: [
        ['meta', { name: 'author', content: '满满Dynamo'}],
        ['meta', { name: '联系方式', content: 'QQ:2970513337,wx:y19986209969'}],
        ['link', { rel: 'icon', href: '/img/chong.png'}],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css' }], // 引入KaTeX的CSS样式
    ],

    markdown: {
        lineNumbers: true,
    },

    themeConfig: {
        logo: '/img/chong.png',
        lastUpdated: '上次更新时间：',
        smoothScroll: true, // 页面滚动
        nav: [
            { text: 'Home', link: '/'},
            { // 计算机下拉列表
                text: 'Computer',
                ariaLabel: '计算机',
                items: [
                    { text: 'C++', link: '/computer/cpp/'},
                    { text: '数据结构', link: '/computer/data-structure/'},
                    { text: 'STL', link: '/computer/STL/'},
                ]
            },
            {
                text: '前端',
                items: [
                    { text: 'HTML5', link: '/Web/HTML5/'},
                    { text: 'CSS', link: '/Web/CSS/'},
                ]
            },
        ],

        sidebar: {
            '/computer/cpp/': [
                {
                    title: 'C++',
                    path: '/computer/cpp/',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        '/computer/cpp/01.html',
                        '/computer/cpp/02.html',
                        '/computer/cpp/03.html',
                        '/computer/cpp/04.html',
                        '/computer/cpp/05.html',
                        '/computer/cpp/06.html',
                        '/computer/cpp/07.html',
                        '/computer/cpp/08.html',
                        '/computer/cpp/09.html',
                        '/computer/cpp/10.html',
                        '/computer/cpp/11.html',
                        '/computer/cpp/12.html',
                        '/computer/cpp/13.html',
                        '/computer/cpp/14.html',
                    ]
                }
            ],
            '/computer/data-structure/': [
                {
                    title: '数据结构',
                    path: '/computer/data-structure/',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        '/computer/data-structure/note.html',
                    ]
                }
            ],
            '/computer/STL/': [
                {
                    title: 'STL',
                    path: '/computer/STL/',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        '/computer/STL/vector.html',
                        '/computer/STL/stack.html',
                        '/computer/STL/queue.html',
                        '/computer/STL/priority_queue.html',
                        '/computer/STL/set.html',
                        '/computer/STL/map.html',
                        '/computer/STL/string.html',
                        '/computer/STL/pair.html',
                        '/computer/STL/iterator.html',
                        '/computer/STL/algorithms.html',
                    ]
                }
            ],
            '/Web/HTML5/': [
                {
                    title: 'HTML5介绍',
                    path: '/Web/HTML5/',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        '/Web/HTML5/title.html',
                        '/Web/HTML5/P-T-W-HL.html',
                        '/Web/HTML5/photo.html',
                        '/Web/HTML5/hyperlink.html',
                        '/Web/HTML5/list.html',
                        '/Web/HTML5/table.html',
                        '/Web/HTML5/form.html',
                        '/Web/HTML5/block-inline-elements.html',
                        '/Web/HTML5/add-tag.html',
                    ]
                }
            ],
            '/Web/CSS/': [
                {
                    title: 'CSS',
                    path: '/Web/CSS/',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        '/Web/CSS/import.html',
                        '/Web/CSS/selector.html',
                        '/Web/CSS/relation-selector.html',
                        '/Web/CSS/property.html',
                        '/Web/CSS/box-model.html',
                        '/Web/CSS/elastic.html',
                        '/Web/CSS/float.html',
                        '/Web/CSS/position.html',
                        '/Web/CSS/new-character.html',
                        '/Web/CSS/meta.html',
                        '/Web/CSS/sprite.md',
                        '/Web/CSS/iconfont.html',
                    ]
                }
            ],
        },

    }
}