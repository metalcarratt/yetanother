import { createApp } from 'vue'
import App from './App.vue'
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

const app = createApp(App);
app.use(router);
app.mount('#app')
