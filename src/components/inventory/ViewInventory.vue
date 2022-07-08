<template>
    <ShowModal v-if="modal.isShowingModal('ViewInventory')">
        <h2>Inventory</h2>
        <InventoryItem v-for="(item, itemIndex) in inventory.getItems()" :key="itemIndex" :item="item" @click="viewItem(item)"/>
        <div>
            <ShowButton colour="green" @click="modal.close()">Close</ShowButton>
        </div>
    </ShowModal>
</template>

<script setup>
import ShowModal from '../modal/ShowModal.vue';
import inventory from './inventory';
import ShowButton from '../common/SmallButton.vue';
import InventoryItem from './InventoryItem.vue';
import modal from '../modal/modal';

const viewItem = (item) => {
    inventory.setViewing(item);
    modal.showModal('ViewItem');
}
</script>

<style scoped>

</style>