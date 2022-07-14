import { ref } from "vue"
const golbalState = ref({})
let setGlobalStateFn = null
export const initGolbalState = (props) => {
    if(props.onGlobalStateChange) {
        props.onGlobalStateChange((val) => {
            golbalState.value = val
        }, true)
    }
    setGlobalStateFn = props.setGlobalState
}

export const setGlobalState = (data) => {
    setGlobalStateFn(data)
}
export default golbalState