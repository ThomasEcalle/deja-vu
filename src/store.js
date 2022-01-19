import Vuex from 'vuex'
import { MENU, HOME, SET_CONTENT, CLOSE_MENU, OPEN_MENU, TOGGLE_DARKMODE } from './constants'

export default new Vuex.Store({
    state: {
        menuVisible: false,
        darkMode: false,
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
        [TOGGLE_DARKMODE] (state) {
            state.darkMode = !state.darkMode;
            if (state.darkMode) {
                document.documentElement.classList.add('dark'); 
            } else {
                document.documentElement.classList.remove('dark')
            }
        },
    }
})