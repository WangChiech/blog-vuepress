// nav
module.exports = [
  {
    text: '语言',
    link: '/language/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: 'JavaScript',
        link: '/pages/8d5317/',
        // items: [
        //   { text: '/pages/8d5317/', link: '/pages/8d5317/' },
        // ],
      },
      // {
      //   text: 'Node',
      //   // link: '/pages/8d5317/',
      //   items: [
      //     // { text: '《JavaScript教程》', link: '/pages/8d5317/' },
      //   ],
      // },
    ],
  },
  // {
  //   text: '框架',
  //   link: '/frame/',
  //   items: [
  //     // { 
  //     //   text: 'HTML', 
  //     //   link: '/pages/8309a5b876fc95e3/'，
  //     //   items: [

  //     //   ]
  //     // },
  //   ],
  // },
  // {
  //   text: '协议',
  //   link: '/protocol/',
  //   items: [
  //     // { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
  //   ],
  // },
  // {
  //   text: '工程化',
  //   link: '/engineering/',
  //   items: [
  //     // { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
  //   ],
  // },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
