import { createStore } from 'vuex';
import { ItemType } from '../items/itemType'
import createSpiritStone from '../items/spiritStone';

interface InventoryState {
    items: ItemType[],
    viewing: ItemType
}

const noItem : ItemType = {
    type: 'none',
    actions: []
}

const store = createStore<InventoryState>({
    state: {
        items : [
            createSpiritStone()
        ],
        viewing: noItem
    }
});

export default {
    store,
    getItems: () : ItemType[] => store.state.items,
    addItem: (item : ItemType) => store.state.items.push(item),
    setViewing: (item : ItemType) => {
        console.log("Set viewing:");
        console.log(item);
        store.state.viewing = item
    },
    getViewing: () : ItemType | null => {
        console.log("Get viewing:");
        console.log(store.state.viewing);
        return store.state.viewing;
    }
}