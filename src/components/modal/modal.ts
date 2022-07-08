import { createStore } from 'vuex';

const store = createStore({
    state: {
        showModal: ''
    }
});

export default {
    store,
    showModal: (modalName : string) => store.state.showModal = modalName,
    isShowingModal: (modalName : string) : boolean => store.state.showModal === modalName,
    close: () => store.state.showModal = ''
}