/**
 * 时间线页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/timelineConfig.ts 控制。
 */
import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [
  {
    title: "Birdjiujiuuu の 小窝有域名了",
    date: "2026.10.29",
    category: "project",
    subtitle: "个人博客", 
    description: "为 Birdjiujiuuu の 小窝添加了域名，域名有效期为一年。",
	highlights: [
      "当前的域名临时的，1年后网站会迁移到新的域名",
    ],
    tags: ["网站"],
    icon: "material-symbols:deployed-code-outline-rounded",
    featured: false,
  },
  {
    title: "Birdjiujiuuu の 小窝开始运营",
    date: "2026.10.27",
    category: "milestone",
    subtitle: "个人博客", 
    description: "我的个人博客开始更新啦！",
    tags: ["网站"],
    icon: "material-symbols:rocket-launch-rounded",
    featured: true,
  },
  {
    title: "神奇的应用程序上架 Microsoft Store",
    date: "2026.08.13",
    category: "milestone",
    subtitle: "开源项目",
    location: "Microsoft Store",
    description: "没错它上架应用商店了！",
    highlights: [
      "可以直接前往商店下载安装了",
      "保留了原先 Github release 的更新方式",
    ],
    tags: ["应用", "WinUI3"],
    links: [
      { label: "Microsoft Store", url: "https://apps.microsoft.com/detail/9pbz97jbr98g", icon: "fa7-brands:microsoft" },
    ],
    icon: "material-symbols:rocket-launch-rounded",
    featured: true,
  },
  {
    title: "神奇的应用程序重置",
    date: "2025.10.23",
    category: "milestone",
    subtitle: "开源项目",
    location: "Github",
    description: "这个程序弃置了很久，现在重新开发了！",
    highlights: [
      "新版本将会持续更新",
      "这次使用了 AI 辅助开发，开发效率大幅提升",
    ],
    tags: ["应用", "WinUI3"],
    links: [
      { label: "Github", url: "https://github.com/Birdjiujiuuu/MagicApp", icon: "fa7-brands:github" },
    ],
    icon: "material-symbols:rocket-launch-rounded",
    featured: true,
  },
  {
    title: "神奇的应用程序开始开发",   // 事件标题（禁用按它命中）
    date: "2022.09.09",                        // 时间（自由格式，如区间 "2025.03 – Present"）
    category: "milestone",                  // 分类，引用 config 中的 key
    subtitle: "开源项目",        // 副标题（可选）
    location: "Github",               // 地点（可选）
    description: "开始开发神秘软件：神奇的应用程序",          // 经历描述
    highlights: [                           // 要点列表（可选）
      "水平有限，时间有限，佛系更新",
      "使用全新框架 WinUI3 开发",
      "代码纯手搓，网上资料很少，很艰难（",
    ],
    tags: ["应用", "WinUI3"],            // 技术标签（可选）
    links: [                                // 关联链接（可选）
      { label: "Github", url: "https://github.com/Birdjiujiuuu/MagicApp_Old", icon: "fa7-brands:github" },
    ],
    icon: "material-symbols:rocket-launch-rounded",  // 节点图标
    featured: true,                         // 精选
  },
]

/** 获取所有时间线数据列表 */
export function getTimelineList(): TimelineItem[] {
	return timelineData;
}
