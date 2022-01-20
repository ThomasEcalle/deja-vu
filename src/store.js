import Vuex from 'vuex'
import { MENU, HOME, SET_CONTENT, CLOSE_MENU, OPEN_MENU, TOGGLE_DARKMODE, OPEN_PAGE_DETAIL, PAGE_DETAIL } from './constants'

export default new Vuex.Store({
    state: {
        menuVisible: false,
        darkMode: false,
        content: HOME,
        lastContent: HOME,
        selectedPage: null,
        pages: [
            {
                id: 0,
                menuTitle: "Popup store",
                detailTitleStrokedPart: "Pop-up store",
                detailTitleNormalPart: "virtuel",
                subTitle: "La révolution de l'expérience client",
                description: "Lorem Ipsum",
                b2c: true,
            },
            {
                id: 1,
                menuTitle: "Mariages",
                detailTitleStrokedPart: "Mariages",
                detailTitleNormalPart: null,
                subTitle: "La révolution des mariages",
                description: "Lorem Ipsum",
                b2c: false,
            },
        ],
    },
    mutations: {
        [SET_CONTENT](state, newValue) {
            state.lastContent = state.content;
            state.menuVisible = newValue == MENU;
            state.content = newValue;
        },
        [CLOSE_MENU](state) {
            state.menuVisible = false;
            state.content = state.lastContent;
        },
        [OPEN_MENU](state) {
            state.menuVisible = true;
            state.lastContent = state.content;
            state.content = MENU;
        },
        [OPEN_PAGE_DETAIL](state, pageDetailId) {
            state.menuVisible = false;
            state.selectedPage = state.pages.find(page => page.id == pageDetailId);
            state.content = PAGE_DETAIL;
        },
        [TOGGLE_DARKMODE](state) {
            state.darkMode = !state.darkMode;
            if (state.darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark')
            }
        },
    },
    getters: {
        b2cPages: (state) => {
            return state.pages.filter(page => page.b2c);
        },
        b2bPages: (state) => {
            return state.pages.filter(page => !page.b2c);
        },
        getSelectedPage: (state) => {
            return state.selectedPage;
        }
    }
})