export type ProjectStatus = "live" | "building" | "archived";
export type ProjectRole = "Product / Design / Build";
export type ProjectType = "Personal Product";
export type ProjectPlatform = "Mobile-first Web";

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface ProductDecision {
  title: string;
  decision: string;
  reason: string;
  tradeoff: string;
}

export interface BuildNote {
  problem: string;
  diagnosis: string;
  solution: string;
  result: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  chineseName: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  role: ProjectRole;
  type: ProjectType;
  platform: ProjectPlatform;
  liveUrl?: string;
  githubUrl?: string;
  coverImage: ProjectImage;
  screenshots: ProjectImage[];
  techStack: string[];
  problem: string[];
  solution: string[];
  decisions: ProductDecision[];
  features: string[];
  buildNotes: BuildNote[];
  learnings: string[];
  featured: boolean;
  seo: {
    title: string;
    description: string;
  };
}

const sharedProjectFields = {
  status: "live" as const,
  role: "Product / Design / Build" as const,
  type: "Personal Product" as const,
  platform: "Mobile-first Web" as const,
  featured: true,
};

export const projects: Project[] = [
  {
    ...sharedProjectFields,
    id: "life-progress",
    slug: "life-progress",
    name: "Life Progress",
    chineseName: "人生进度条",
    tagline: "把生活里正在发生的事，变成可以被看见的进度。",
    description: "把年份、年龄、旅行、存钱、学习等现实目标转换成直观进度条。",
    liveUrl: "https://life-progress-umber.vercel.app",
    githubUrl: "https://github.com/Jocelin0905/life-progress",
    coverImage: {
      src: "/images/projects/life-progress.webp",
      alt: "Life Progress 手机界面，展示创建类型、多个生活进度和目标详情",
      width: 1800,
      height: 1344,
    },
    screenshots: [
      {
        src: "/images/projects/life-progress.webp",
        alt: "Life Progress 的时间与目标创建入口、进度列表和目标详情",
        width: 1800,
        height: 1344,
        caption: "从创建类型，到多条进度总览，再到单个目标详情。",
      },
    ],
    techStack: ["React", "TypeScript", "Vite", "HashRouter", "localStorage", "Vercel"],
    problem: [
      "很多生活目标并不缺少数字，而是缺少一种能让人快速感知当前位置的表达。年份在流逝，旅行基金在累积，阅读计划也在推进，但这些变化通常散落在日期、金额和清单里。",
      "Life Progress 希望减少理解进度时的计算成本，让用户不需要被催促，也能看见生活正在发生什么。",
    ],
    solution: [
      "产品把记录分成时间进度和目标进度。用户只需提供起止日期，或当前值与目标值，系统就会生成安静、直观的进度表达。",
      "V1 只保留创建、查看、编辑、删除与本地保存。产品价值来自快速看见进度，不需要账号、提醒系统或复杂配置。",
    ],
    decisions: [
      {
        title: "两种进度，两套模型",
        decision: "将时间进度和目标进度拆成独立模型。",
        reason: "日期区间与数值目标需要完全不同的输入、校验和计算方式。",
        tradeoff: "创建入口多了一次选择，但表单更短，数据语义也更清楚。",
      },
      {
        title: "数据留在浏览器",
        decision: "V1 使用 localStorage，不引入账号、后端和数据库。",
        reason: "这是轻量个人工具，本地保存已经能支持核心体验，也更符合隐私需求。",
        tradeoff: "实现保持简单，但暂不支持跨设备同步。",
      },
      {
        title: "静态部署优先",
        decision: "使用 HashRouter 管理产品内部页面。",
        reason: "Hash 路由不依赖服务器为子路径配置 Rewrite，适合静态托管。",
        tradeoff: "部署更稳，但 URL 中会保留井号。",
      },
      {
        title: "不做督促型工具",
        decision: "视觉和文案保持非评判式。",
        reason: "产品的任务是帮助用户看见进度，而不是评价用户是否足够自律。",
        tradeoff: "产品不会用连续打卡、警告或高压提醒来制造参与感。",
      },
    ],
    features: [
      "时间进度与目标进度",
      "进度百分比和可视化进度条",
      "多条进度总览",
      "进度详情、编辑与删除",
      "浏览器本地持久化",
      "数据与隐私说明",
    ],
    buildNotes: [],
    learnings: [
      "把同一个进度概念拆成不同的数据模型。",
      "localStorage 适合轻量个人工具，但不适合跨设备同步。",
      "Hash Router 能降低静态托管的路由配置成本，同时需要接受 URL 形式上的取舍。",
    ],
    seo: {
      title: "Life Progress — Things I Wish Existed",
      description: "Life Progress 是一个把时间与现实目标转换成直观进度条的移动优先网页产品。",
    },
  },
  {
    ...sharedProjectFields,
    id: "life-price",
    slug: "life-price",
    name: "Life Price",
    chineseName: "时间价格计算器",
    tagline: "价格不只是数字，也是一段你需要交换出去的时间。",
    description: "把商品价格转换成需要付出的工作时间，帮助用户重新理解消费成本。",
    liveUrl: "https://life-price-jocelin3.vercel.app",
    githubUrl: "https://github.com/Jocelin0905/life-price",
    coverImage: {
      src: "/images/projects/life-price.webp",
      alt: "Life Price 手机界面，展示收入设置、价格换算和保住的人生时间",
      width: 1800,
      height: 1383,
    },
    screenshots: [
      {
        src: "/images/projects/life-price.webp",
        alt: "Life Price 的个人时间基准、商品价格输入和人生时间统计",
        width: 1800,
        height: 1383,
        caption: "从个人时薪基准，到一次价格换算，再到被保留的人生时间。",
      },
    ],
    techStack: ["React", "TypeScript", "Next.js / Vinext", "localStorage", "Vercel"],
    problem: [
      "商品价格很容易比较，时间成本却很难被立即感知。用户面对一笔消费时，知道它值多少钱，却不一定知道自己需要工作多久才能换来它。",
      "Life Price 试图把价格翻译成更接近生活经验的语言，让消费决定多一个清楚的参照。",
    ],
    solution: [
      "用户先输入月收入、每周工作天数与每天工作小时，建立个人时薪基准。输入商品价格后，产品会把金额换算成工作小时与工作日。",
      "结果页继续提供值得交换或算了两个选择。被放弃的消费会累计成保住的人生时间，让一次计算形成可回看的决策记录。",
    ],
    decisions: [
      {
        title: "使用真实工作节奏",
        decision: "不使用月收入除以 30 的简化算法。",
        reason: "每周工作天数和每天工作小时，更接近用户实际付出的工作时间。",
        tradeoff: "首次使用需要多填两个字段，但结果更有个人意义。",
      },
      {
        title: "保留历史语境",
        decision: "修改收入设置只影响未来的新换算。",
        reason: "过去的记录代表当时的收入与决策环境，不应该被新设置改写。",
        tradeoff: "历史结果不会始终使用最新时薪，但数据语义更稳定。",
      },
      {
        title: "从计算走向决定",
        decision: "结果页明确提供值得交换和算了。",
        reason: "核心价值不只是得到一个数字，而是帮助用户完成一次消费判断。",
        tradeoff: "产品不提供复杂预算系统，保持在单次决定的范围内。",
      },
      {
        title: "V1 保持本地化",
        decision: "使用 localStorage，不加入账号、数据库或云同步。",
        reason: "收入和消费记录具有隐私属性，本地保存足以支持 V1。",
        tradeoff: "更换设备或清除浏览器数据后，记录不会自动恢复。",
      },
    ],
    features: [
      "个人时薪基准计算",
      "价格换算为工作时间与工作日",
      "值得交换与算了的决策流程",
      "我保住的人生时间",
      "按月查看放弃的消费",
      "浏览器本地持久化",
    ],
    buildNotes: [
      {
        problem: "项目需要从原托管环境迁移到稳定的正式发布流程。",
        diagnosis: "代码可以运行，但缺少以 GitHub 主分支为中心的持续部署链路。",
        solution: "将项目迁移到 Vercel，并连接 GitHub 仓库与 Production Branch。",
        result: "main 分支的更新可以进入 GitHub 到 Vercel 的自动部署流程。",
      },
    ],
    learnings: [
      "计算器的关键不只是公式，还包括如何把结果转成用户能理解的决策语言。",
      "历史数据不一定应该跟随最新设置重算，数据语义比始终保持最新更重要。",
      "建立了 GitHub、分支、PR、Vercel Production 和自动部署的基本工作流。",
    ],
    seo: {
      title: "Life Price — Things I Wish Existed",
      description: "Life Price 把商品价格转换成工作时间，帮助用户重新理解一笔消费的真实成本。",
    },
  },
  {
    ...sharedProjectFields,
    id: "life-roulette",
    slug: "life-roulette",
    name: "Life Roulette",
    chineseName: "人生老虎机",
    tagline: "不知道今天做什么时，让随机给出一个可以立刻行动的小挑战。",
    description: "当不知道今天做什么时，随机生成一个现实世界的小挑战。",
    liveUrl: "https://life-roulette.vercel.app",
    githubUrl: "https://github.com/Jocelin0905/life-roulette",
    coverImage: {
      src: "/images/projects/life-roulette.webp",
      alt: "Life Roulette 手机界面，展示随机挑战、今日任务、完成记录和结果",
      width: 1800,
      height: 964,
    },
    screenshots: [
      {
        src: "/images/projects/life-roulette.webp",
        alt: "Life Roulette 从随机挑战到任务完成的完整手机端流程",
        width: 1800,
        height: 964,
        caption: "一次随机结果，经过接受、执行和记录，变成完整的现实行动。",
      },
    ],
    techStack: ["React", "TypeScript", "Vite", "BrowserRouter", "localStorage", "Vercel"],
    problem: [
      "空闲时不知道做什么，并不总是缺少选项。真正的阻力往往是选项太多，导致一次很小的行动也需要反复决定。",
      "Life Roulette 希望把这段决策过程压缩成一次随机选择，并确保结果足够具体，可以马上在现实世界中执行。",
    ],
    solution: [
      "产品从 WHO、WHERE 和 WHAT 三个维度组织挑战素材，但最终输出一条自然、完整、可执行的任务，而不是生硬拼接关键词。",
      "用户可以接受、重抽或放弃。接受后任务会进入 Today’s Mission，完成时可选写下一句记录，并在历史页面回看。",
    ],
    decisions: [
      {
        title: "随机不等于随意拼词",
        decision: "WHO、WHERE、WHAT 只作为视觉结构，最终输出使用完整挑战。",
        reason: "简单拼词容易产生语义奇怪或无法执行的结果。",
        tradeoff: "任务池需要人工设计，但每次抽取的质量更稳定。",
      },
      {
        title: "抽到与接受分开",
        decision: "用户看到结果后，再选择接受、重抽或放弃。",
        reason: "随机结果不应该自动成为承诺，用户需要保留一次明确决定。",
        tradeoff: "流程多一步，但 Today’s Mission 的状态更有意义。",
      },
      {
        title: "完成记录保持轻量",
        decision: "笔记可跳过，并限制在 100 字以内。",
        reason: "记录应该帮助用户留下痕迹，而不是把小工具变成日记系统。",
        tradeoff: "不支持长文、图片或复杂分类。",
      },
    ],
    features: [
      "WHO、WHERE、WHAT 挑战结构",
      "随机抽取现实挑战",
      "接受、重抽与放弃",
      "Today’s Mission",
      "可选完成笔记",
      "完成次数与历史记录",
      "浏览器本地持久化",
    ],
    buildNotes: [
      {
        problem: "功能完成后，正式上线被 Git 权限和前端子路由 404 阻塞。",
        diagnosis: "Codex Sandbox 无法正常写入 .git；BrowserRouter 的子路径也需要托管平台提供 History API Fallback。",
        solution: "将 Git 操作迁移到 Windows 宿主环境，重新建立 Git、GitHub、Vercel 发布链路，并添加 Vercel SPA Rewrite。",
        result: "项目成功上线，/history 等子路由可以直接访问和刷新，main 更新也能进入 Production 部署。",
      },
    ],
    learnings: [
      "代码完成和产品真正上线是两回事，上线还涉及 Git、部署、路由、权限和公网验证。",
      "Codex Sandbox 与 Windows 宿主环境不是同一个执行环境，权限、Git 和凭据不会自动共享。",
      "跑通了本地 Git、GitHub、Vercel 与 Production 自动部署的完整链路。",
      "理解了 BrowserRouter 子路由刷新 404，以及 History API Fallback 和 Vercel Rewrite 的作用。",
      "环境问题要先判断权限边界，不能在同一个受限环境里反复尝试系统级操作。",
    ],
    seo: {
      title: "Life Roulette — Things I Wish Existed",
      description: "Life Roulette 通过随机挑战帮助用户跳出选择困难，完成一个现实世界中的小行动。",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectStats = {
  shipped: projects.length,
  live: projects.filter((project) => project.status === "live").length,
  publicRepositories: projects.filter((project) => Boolean(project.githubUrl)).length,
};

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(currentSlug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  return projects[(currentIndex + 1) % projects.length];
}
