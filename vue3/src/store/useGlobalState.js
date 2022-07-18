import { ref } from "vue"

const globalState = ref({})
let setGlobalState = null


function useGlobalState(props = {}) {
    if(props.setGlobalState) {
        setGlobalState = props.setGlobalState
        props.onGlobalStateChange((val) => {
            globalState.value = val
        }, true)
    }

    return {
        globalState,
        setGlobalState,
    }
}


export default useGlobalState