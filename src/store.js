import Vuex from 'vuex'
import { storeKey } from 'vuex/dist/vuex.cjs';
import { MENU, HOME, SET_CONTENT, CLOSE_MENU, OPEN_MENU, TOGGLE_DARKMODE, OPEN_PAGE_DETAIL, PAGE_DETAIL, FETCH_PAGES } from './constants'
import { Page } from './models/Page'

export default new Vuex.Store({
    state: {
        menuVisible: false,
        darkMode: false,
        content: HOME,
        lastContent: HOME,
        selectedPage: null,
        pages: [],
    },
    mutations: {
        async [FETCH_PAGES](state) {
            const res = await fetch('http://localhost:8055/items/Pages', {
                method: 'get',
                headers: {
                    'content-type': 'application/json'
                }
            });

            if (!res.ok) {
                console.log(`Error retrieving pages: ${res.statusText}`);
            } else {
                const json = await res.json();
                for (var i = 0; i < json.data.length; i++) {
                    const item = json.data[i];
                    state.pages.push(
                        new Page(
                            item.id,
                            item.menuTitle,
                            item.detailTitleStroked,
                            item.detailTitleNormal,
                            item.subtitle,
                            item.description,
                            item.b2c,
                            item.videoLink,
                        )
                    );
                }
            }
        },
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
        allPages: (state) => {
            const result = [];

            state.pages.forEach(element => {
                result.push(element.menuTitle);
            });

            return result;
        },
        getSelectedPage: (state) => {
            return state.selectedPage;
        }
    }
})