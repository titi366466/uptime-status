window.Config = {

  // 显示标题
  SiteName: 'Public Status',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'ur2580262-5f3251bf87018a97f8ae5ee5', // 全局 API 密钥
  ],

  // 日志天数
  CountDays: 90,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: 'Homepage',
      url: 'https://status.org.cn/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/yb/uptime-status'
    },
    {
      text: 'Blog',
      url: 'https://abo.xyz/'
    },
  ],
};
