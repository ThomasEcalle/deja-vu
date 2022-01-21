import Vuex from 'vuex'
import { MENU, HOME, SET_CONTENT, CLOSE_MENU, OPEN_MENU, TOGGLE_DARKMODE, OPEN_PAGE_DETAIL, PAGE_DETAIL, FETCH_PAGES, OPEN_OTHER_DETAIL, PAGE_OTHER, TOGGLE_SOUND } from './constants'
import { Other } from './models/Other';
import { Page } from './models/Page'

export default new Vuex.Store({
    state: {
        menuVisible: false,
        darkMode: false,
        soundOn: false,
        audio: null,
        content: HOME,
        lastContent: HOME,
        selectedPage: null,
        selectedOther: null,
        pages: [],
        others: [],
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

            const othersRes = await fetch('http://localhost:8055/items/Others', {
                method: 'get',
                headers: {
                    'content-type': 'application/json'
                }
            });

            if (!othersRes.ok) {
                console.log(`Error retrieving others: ${res.statusText}`);
            } else {
                const json = await othersRes.json();

                for (var i = 0; i < json.data.length; i++) {
                    const item = json.data[i];
                    state.others.push(
                        new Other(
                            item.id,
                            item.Title,
                            item.Description,
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
        [OPEN_OTHER_DETAIL](state, otherDetailId) {
            state.menuVisible = false;
            state.selectedOther = state.others.find(element => element.id == otherDetailId);

            state.content = PAGE_OTHER;
        },
        [TOGGLE_DARKMODE](state) {
            state.darkMode = !state.darkMode;
            if (state.darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark')
            }
        },
        [TOGGLE_SOUND](state) {

            if (state.audio === undefined || state.audio === null) {
                state.audio = new Audio('https://www.dropbox.com/s/7tr6hr6k6fplf8r/deja_vu.wav?raw=1');
            }
            if (state.soundOn) {
                state.audio.pause();
            } else {
                
                state.audio.play();
            }
            state.soundOn = !state.soundOn;
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
        allOthers: (state) => {
            return state.others;
        },
        getSelectedOther: (state) => {
            return state.selectedOther;
        },
        getSelectedPage: (state) => {
            return state.selectedPage;
        }
    }
})