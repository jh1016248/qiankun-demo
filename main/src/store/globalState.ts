import { initGlobalState } from "qiankun"
import { reactive } from 'vue'

export const globalStateData = reactive({
    userInfo: '',
})

const globalState = initGlobalState(globalStateData)
globalState.onGlobalStateChange((data) => {
    Object.assign(globalStateData, data)
})

export const setGlobalState = (data: any) => {
    Object.assign(globalStateData, data)
    globalState.setGlobalState(data)
}
