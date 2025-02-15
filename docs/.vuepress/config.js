

module.exports = {
    //base: '/DynamoSpace/',
    title: "满满Dynamo",
    head: [
        ['meta', { name: 'author', content: '满满Dynamo'}],
        ['meta', { name: '联系方式', content: 'QQ:2970513337,wx:y19986209969'}],
        ['link', { rel: 'icon', href: '/img/chong.png'}],
    ],

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
            ]
        },

    }
}