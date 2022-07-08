import { createStore } from 'vuex';
import inventory from './components/inventory/inventory';
import modal from './components/modal/modal';
import skills from './components/experience/skills';

const store = createStore({
    modules: {
        inventory: inventory.store,
        modal: modal.store,
        skill: skills.store
    }
});

export default store;