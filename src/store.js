import Vuex from 'vuex'
import { MENU, HOME, SET_CONTENT, CLOSE_MENU, OPEN_MENU, TOGGLE_DARKMODE, OPEN_PAGE_DETAIL, PAGE_DETAIL, FETCH_PAGES, OPEN_OTHER_DETAIL, PAGE_OTHER, TOGGLE_SOUND } from './constants'
import { Other } from './models/Other';
import { Page } from './models/Page'

const BASE_URL = "https://main-bvxea6i-wv47clkpjwwaq.fr-3.platformsh.site";

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
        currentLocale: null,
        pages: [],
        others: [],
    },
    mutations: {
        async [FETCH_PAGES](state) {
            state.audio = new Audio(`${BASE_URL}/assets/508bad8b-1e17-40e3-93a4-0dceffb28313.wav`);
            state.audio.preload = "auto";

            const res = await fetch(`${BASE_URL}/items/Pages?fields=*.*`, {
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

                    const retrievedTranslations = json.data[i]['translations'];
                    var enTranslations = undefined;
                    var frTranslations = undefined;

                    if (retrievedTranslations != undefined) {
                        enTranslations = retrievedTranslations.filter(translation => translation["languages_id"].includes("en"));
                        frTranslations = retrievedTranslations.filter(translation => translation["languages_id"].includes("fr"));
                    }

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
                            {
                                "en-US": enTranslations != undefined ? enTranslations[0] : undefined,
                                "fr-FR": frTranslations != undefined ? frTranslations[0] : undefined,
                            }
                        )
                    );
                }
            }

            const othersRes = await fetch(`${BASE_URL}/items/Others?fields=*.*`, {
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

                    const retrievedTranslations = json.data[i]['translations'];
                    var enTranslations = undefined;
                    var frTranslations = undefined;

                    if (retrievedTranslations != undefined) {
                        enTranslations = retrievedTranslations.filter(translation => translation["languages_code"].includes("en"));
                        frTranslations = retrievedTranslations.filter(translation => translation["languages_code"].includes("fr"));
                    }


                    state.others.push(
                        new Other(
                            item.id,
                            item.title,
                            item.description,
                            {
                                "en-US": enTranslations != undefined ? enTranslations[0] : undefined,
                                "fr-FR": frTranslations != undefined ? frTranslations[0] : undefined,
                            }
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
            return state.pages;
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