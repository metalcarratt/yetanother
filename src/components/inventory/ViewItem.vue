<template>
    <ShowModal v-if="modal.isShowingModal('ViewItem')">
        <h2>{{ inventory.getViewing().type }}</h2>
        <InventoryItem :item="inventory.getViewing()" />

        <span v-for="(action, actionIndex) in inventory.getViewing().actions" :key="actionIndex">
            <SmallButton colour="blue" v-if="action.condition()" @click="clickAction(action)">{{ action.name }}</SmallButton>
        </span>

        <SmallButton colour="green" @click="modal.showModal('ViewInventory')">Back</SmallButton>
    </ShowModal>
    <MessageModal :message="message" @close="continueAction()" />
</template>

<script setup>
import { ref } from 'vue';
import ShowModal from '../modal/ShowModal.vue';
import modal from '../modal/modal';
import inventory from './inventory';
import InventoryItem from './InventoryItem.vue';
import SmallButton from '../common/SmallButton.vue';
import MessageModal from '../modal/MessageModal.vue';

const message = ref('');
const action = ref({});

const clickAction = (_action) => {
    console.log("action clicked");
    console.log(_action);
    if (_action.onclick.message) {
        console.log("has onclick message");
        message.value = _action.onclick.message;
        action.value = _action;
        modal.showModal('MessageModal');
    }
}

const continueAction = () => {
    action.value.onclick.action();
    modal.showModal('ViewItem');
}
</script>