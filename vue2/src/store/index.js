import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = null

export function getStore(props = { }) {
    if(props.setGlobalState) {
        const { setGlobalState, onGlobalStateChange } = props
        
        store = new Vuex.Store({
            state: {
                globalData: {},
            },
            mutations: {
                setGlobalState(state, data) {
                    state.globalData = {
                        ...state.globalData,
                        ...data,
                    }
                },
            },
            actions: {
                setGlobalState({ }, data) {
                    setGlobalState(data)
                },
            },
        })

        if(onGlobalStateChange) {
            onGlobalStateChange((data) => {
                store.commit('setGlobalState', data)
            }, true)
        }
    }
    return store
}

export default store