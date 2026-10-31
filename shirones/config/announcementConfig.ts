import type { AnnouncementConfig } from "@/types/announcementConfig";
import { withUserConfig } from "@/utils/config-overlay.ts";

/**
 * 公告栏配置
 * 组件显示由 sidebarConfig 统一控制
 */
export const announcementConfig: AnnouncementConfig = withUserConfig(
	"announcement",
	{
		title: "", // 公告标题，填空使用 i18n 字符串 Key.announcement
		content: "Birdjiujiuuu の 小窝上线了喵，欢迎收藏喵~ 网站的域名可能会变更，为了防止找不到回家的路，请收藏家的地址哦~", // 公告内容
		closable: false, // 允许用户关闭公告
		link: {
			enable: true, // 启用链接
			text: "Home", // 链接文本
			url: "https://birdjiujiuuu.github.io", // 链接 URL
			external: true, // 外部链接
		},
	},
);
