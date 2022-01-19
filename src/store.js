import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        content: "Home",
    },
    mutations: {
        setContent (state, newValue) {
            state.content = newValue;
        }
    }
})