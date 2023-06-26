import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/home/Home.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(), // 路由模式
	routes,
});

export default router;
