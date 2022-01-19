import Vuex from 'vuex'
import { MENU, HOME, SET_CONTENT, CLOSE_MENU, OPEN_MENU } from './constants'

export default new Vuex.Store({
    state: {
        menuVisible: false,
        content: HOME,
        lastContent: HOME,
    },
    mutations: {
        [SET_CONTENT] (state, newValue) {
            state.lastContent = state.content;
            state.menuVisible = newValue == MENU;
            state.content = newValue;
        },
        [CLOSE_MENU] (state) {
            state.menuVisible = false;
            state.content = state.lastContent;
        },
        [OPEN_MENU] (state) {
            state.menuVisible = true;
            state.lastContent = state.content;
            state.content = MENU;
        },
    }
})