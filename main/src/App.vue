

<template>
	<div class="header">
		<ul class="navs">
			<li @click="handleToHome(item)" class="item" :class="{active: active === item.url}" v-for="item in navs" :key="item.url">{{item.name}}</li>
			<li class="flex1">
				<span v-if="globalStateData.userInfo == ''" @click="handleLogin">登录</span>
				<span v-else>欢迎您: {{globalStateData.userInfo}}</span>
			</li>
		</ul>
	</div>
	<div class="loading" v-if="loading">loading...</div>
	<div id="container"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { start } from 'qiankun'
import { useRoute } from 'vue-router'
import { globalStateData, setGlobalState } from './store/globalState'
import router from './router'
import loading from './store/loading'

const navs = [
	{
		name: '测试vue3 首页',
		url: '/vue3#/',
	},
	{
		name: '测试vue3 test',
		url: '/vue3#/test',
	},
	{
		name: '测试vue2 Home',
		url: '/vue2#/',
	},
	{
		name: '测试vue2 about',
		url: '/vue2#/about',
	},
]
const active = ref('')
const route = useRoute()
watch(route, (val) => {
	const item = navs.find(item => item.url === val.fullPath)
	if(item) {	
		active.value = item.url
	}
})
onMounted(() => {
	start({
		prefetch: true, // 开启预加载
		sandbox: {
			experimentalStyleIsolation: true,
		},
	})
})
const handleLogin = () => {
	setGlobalState({
		userInfo: 'name',
	})
}
const handleToHome = (item: any) => {
	router.push(item.url)
	// window.history.pushState(item.url)
}
</script>
<style>
html,
body {
	background: #f5f5f5;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
.header {
	width: 100%;
	height: 70px;
	background: #fff;
	z-index: 2;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
* {
	margin: 0;
}
.navs {
	display: flex;
	padding: 20px 0;
	width: 1200px;
	margin: 0 auto;
}

.navs li {
	display: inline-block;
	padding: 0 20px;
	cursor: pointer;
}
.navs li.item{
	
	text-decoration: underline;
}
.navs li.active{
	color: blue;
}
.navs .flex1 {
	flex: 1;
	text-align: right;
}
.loading{
	text-align: center;
	margin: 50px 0;
}
.container > div[data-qiankun="vue3"]{
	background: none;
}
</style>
