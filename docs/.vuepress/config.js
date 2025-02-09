module.exports = {
    //base: '/DynamoSpace/',
    title: "Dynamo",
    //description: '相当于一个我(Dynamo)的个人空间，分享一些计算机知识或者其他的内容',
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
            //{ text: 'Computer', link: '/computer/'},
            { // 计算机下拉列表
                text: 'Computer',
                ariaLabel: '计算机',
                items: [
                    { text: 'C++', link: '/computer/cpp/'},
                ]
            },
        ],

        sidebar: { // C++部分
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
            ]
        },

    }
}