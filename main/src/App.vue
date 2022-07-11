<template>
  <div class="header">
		<ul class="navs">
			<li @click="handleNav(item)" class="item" :class="{active: active === item.url}" v-for="item in navs" :key="item.url">{{item.name}}</li>
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
import { start } from 'qiankun'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import router from './router'
import { globalStateData, setGlobalState } from './store/globalState'
import loading from './store/loading'

const navs = [
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
}, { deep: true })

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
		userInfo: 'Main Login',
	})
}
const handleNav = (item: any) => {
	router.push(item.url)
}
</script>

<style>
* {
	margin: 0;
}
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
</style>
