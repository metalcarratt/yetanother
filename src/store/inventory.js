import { createStore } from 'vuex';

const store = createStore({
    state: {
        items: []
    }
});

export default {
    store,
    getItems: () => store.state.items,
    addItem: (item) => store.state.items.push(item)
}