<template>
	<img alt="Vue logo" src="http://www.john-online.cn/vue3/assets/logo.png">
	<p>当前登录用户：{{globalState.userInfo}}</p>
	<router-view></router-view>
</template>
<script setup>
import useGlobalState from './store/useGlobalState'
const { globalState } = useGlobalState()
</script>

<style>
body {
	background: none !important;
}
</style>
<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	text-align: center;
}
.modal {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	visibility: hidden;
}
.modal .mask {
	transition: all 0.3s;
	opacity: 0;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	background: rgba(0, 0, 0, 0.5);
}
.modal.active {
	visibility: visible;
}
.modal.active .mask {
	opacity: 1;
}
.container {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	padding: 20px;
	background: #fff;
}
</style>
