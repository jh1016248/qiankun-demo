<template>
	<h2>home 页面</h2>
	<a-button @click="handleChange">子向父通讯</a-button>
	<a-button type="primary" @click="active = true">打开弹窗</a-button>
	<a-modal v-model:visible="active" title="Basic Modal" :getContainer="getContainer" @ok="active = false">
		<p>Some contents...</p>
	</a-modal>
</template>

<script setup>
import { ref } from 'vue'
import useGlobalState from '../store/useGlobalState'
const active = ref(false)
const { setGlobalState } = useGlobalState()

const getContainer = () => {
    return document.querySelector('div[data-qiankun=vue3]')
}


const handleChange = () => {
    setGlobalState({
        userInfo: 'vue3 login',
    })
}
</script>