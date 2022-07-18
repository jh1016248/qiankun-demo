<template>
  <div class="home">
		<div>
      <el-button @click="handleSendMsg">vue2 配合 vuex 向主应用发送消息</el-button>
      <el-button @click="dialogVisible = true">打开弹窗</el-button>
    </div>
    <img alt="Vue logo" src="http://www.john-online.cn/vue3/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
		<el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :modal-append-to-body="false" :before-close="handleClose">
			<span>这是一段信息</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
	data() {
		return {
			dialogVisible: false,
		}
	},
  methods: {
    handleClose() {
      this.dialogVisible = false
    },
    handleSendMsg() {
      this.$store.dispatch('setGlobalState', {
        userInfo: 'vue2 Login'
      })
    },
  }
}
</script>
