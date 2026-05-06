const projects = [
  {
    title: '自律星球｜习惯养成与行为激励平台',
    status: 'App 内测 · 具备上线能力',
    featured: true,
    description:
      '面向 C 端用户的习惯养成与行为激励平台，围绕目标设定、专注执行、行为校验、激励反馈和排行对标构建完整业务闭环。项目已完成 v1.0 核心功能并进入 App 内测阶段，具备上线能力。',
    role: '全栈工程师',
    timeline: 'v1.0 核心功能已完成',
    outcome: '完成目标管理、打卡校验、激励体系、排行榜与数据分析等核心能力，形成可内测的产品闭环。',
    techStack: ['Spring Boot', 'MyBatis-Plus', 'MySQL', 'Redis', 'JWT', 'Apple Sign In', 'Vue3', 'uni-app', 'Vite', 'Axios', 'Sass'],
    highlights: [
      '主导目标管理、打卡、经济系统、排行榜和数据分析模块设计。',
      '设计行为可验证的打卡机制，引入专注会话模型和服务端规则校验。',
      '设计目标生命周期状态机：创建、执行、失败、冻结、解冻。',
      '构建排行榜与用户成长体系，支持总榜、本周榜、连续打卡榜。',
      '接入 Apple 登录和 JWT 双令牌认证体系。',
      '使用 Cursor / ChatGPT 参与接口设计、数据库建模、代码生成和问题排查。',
    ],
    details: [
      '围绕目标、任务、打卡记录和用户激励设计核心数据模型。',
      '通过服务端规则校验降低无效打卡和状态异常风险。',
      '结合 AI 辅助开发工具提升需求拆解、接口设计和问题定位效率。',
    ],
  },
  {
    title: '高校宿舍管理系统',
    status: '管理端与移动端联调完成',
    featured: true,
    githubUrl: 'https://github.com/ntfound404/dormitory-management-system',
    description:
      '面向学校宿舍管理场景，提供用户与角色管理、学生档案管理、宿舍楼与寝室管理、公告发布、晚归考勤和移动端定位签到能力。系统采用前后端分离架构，支持管理员端管理和学生端自助操作。',
    role: '全栈工程师',
    timeline: '前后端分离双端联调完成',
    outcome: '完成管理端与移动端核心流程，覆盖宿舍管理、学生管理、公告、考勤、定位签到等业务场景。',
    techStack: ['Spring Boot 3', 'MyBatis', 'PageHelper', 'MySQL', 'Redis', 'JWT', 'Vue 3', 'Vite', 'Pinia', 'Axios', 'Element Plus', 'Vant', '高德地图 JS API'],
    highlights: [
      '设计 JWT + Redis 会话校验机制，实现多角色权限控制。',
      '实现 super_admin、admin、student 三类角色访问隔离。',
      '完成宿舍楼、寝室、学生、公告、考勤等核心模块开发。',
      '实现寝室容量校验与人数自动增减逻辑。',
      '实现学生账号与学生档案绑定、换绑、解绑流程。',
      '支持移动端定位签到和晚归状态自动判定。',
      '完成管理端和移动端双端联调。',
    ],
    details: [
      '管理端负责宿舍资源、学生档案、公告和考勤配置，移动端负责学生自助查看与签到。',
      '后端围绕角色权限、会话校验和业务边界拆分接口，降低跨角色误操作风险。',
      '通过定位签到与晚归状态判定，提升宿舍考勤场景的数据采集效率。',
    ],
    links: [
      { label: '主项目仓库', url: 'https://github.com/ntfound404/dormitory-management-system' },
      { label: '管理端前端', url: 'https://github.com/ntfound404/dormitory-system-admin' },
      { label: '后端服务', url: 'https://github.com/ntfound404/dormitory-system-backend' },
    ],
  },
  {
    title: 'ModelX 二手模型交易平台',
    status: '核心交易与售后链路完成',
    description:
      '面向 C 端用户和平台运营方的二手模型交易平台，覆盖商品发布、在线交易、支付结算、退货售后、即时沟通和平台风控治理等核心场景，形成完整交易闭环与运营闭环。',
    role: '全栈工程师',
    timeline: '核心交易链路完成',
    outcome: '形成商品、订单、支付、售后、消息与平台治理的完整业务链路。',
    techStack: ['Spring Boot', 'Spring Security', 'MyBatis', 'PageHelper', 'MySQL', 'Redis', 'WebSocket', 'JWT', 'Vue2', 'Element UI', 'uni-app(Vue3)'],
    highlights: [
      '主导商品、订单、支付、退货、消息和运营治理模块设计。',
      '设计订单状态机：待支付、已支付、已发货、已完成、已取消。',
      '实现支付单创建、回调验签、回调幂等、退款与对账。',
      '打通退货售后闭环：申请、审核、寄回、收货、退款。',
      '使用 WebSocket + JWT 实现实时通信、历史消息、未读计数和已读回执。',
      '建设平台治理能力，包括商品审核、举报处置、用户封禁等。',
    ],
    details: [
      '围绕交易平台核心流程设计订单状态流转和售后状态流转。',
      '通过回调幂等和对账思路降低支付链路重复处理风险。',
      '将实时消息、平台审核和用户风控纳入运营闭环。',
    ],
  },
  {
    title: '新概念英语 NCE 听力小程序',
    status: '小程序核心功能完成',
    description:
      '面向《新概念英语》学习者，提供课文音频播放、LRC 逐句字幕、中英对照和全四册课程配置，支持微信小程序端使用，适合碎片化英语学习。',
    role: '前端 / 小程序开发',
    timeline: '小程序核心功能完成',
    outcome: '实现音频播放、字幕同步、课程配置与主题适配，提升移动端英语听力学习体验。',
    techStack: ['HTML5', 'CSS3', 'JavaScript ES6+', 'uni-app', 'WXML', 'WXSS', 'fetch', 'localStorage', 'JSON', 'CDN 静态资源'],
    highlights: [
      '设计课本结构与书目映射，支持远程资源加载。',
      '实现音频播放、LRC 高亮滚动、句子跳转播放。',
      '支持播放速度切换、播放模式切换和中英文显示切换。',
      '封装网络请求、下载重试、超时处理和音频缓存管理。',
      '支持暗色 / 亮色主题适配和跨端一致体验。',
    ],
    details: [
      '将课程、音频、字幕和翻译内容通过结构化配置管理，便于扩展全四册内容。',
      '围绕播放状态、当前句子和滚动位置处理交互同步。',
      '通过缓存与异常处理提升弱网环境下的学习连续性。',
    ],
  },
]

export default projects
