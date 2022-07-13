<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-button type="primary" @click="visibleModal = true">Element UI 按钮</el-button>
    <el-dialog title="提示" :visible.sync="visibleModal" width="30%" :append-to-body="false">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visibleModal = false">取 消</el-button>
        <el-button type="primary" @click="visibleModal = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      visibleModal: false
    }
  }
}
</script>
