import { createApp } from 'vue'
import App from './App.vue'

//routes
import {createRouter, createWebHistory} from 'vue-router';

import WorldMap from './components/explore/WorldMap.vue';
import DungeonMap from './components/dungeon/DungeonMap.vue';

const routes = [
    { path: '/', component: WorldMap },
    { path: '/world', component: WorldMap },
    { path: '/dungeon', component: DungeonMap },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDownLong, faUpLong } from '@fortawesome/free-solid-svg-icons'

library.add(faDownLong, faUpLong)

const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app')
