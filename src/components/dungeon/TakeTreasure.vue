<template>
    <ShowModal v-if="modal.isShowingModal('TakeTreasure')">
        <div class="layout">
            <h1>You found something...</h1>
            <img src="../../assets/sstone.jpg" />
            <label>It's a {{ props.treasure }}!</label>
            <SmallButton colour="green" @click="takeItem">Take it</SmallButton>
        </div>
    </ShowModal>
</template>

<script setup>
import ShowModal from '../modal/ShowModal.vue';
import SmallButton from '../common/SmallButton.vue';
import { defineProps, defineEmits } from 'vue';
import inventory from '../inventory/inventory';
import modal from '../modal/modal';
import createSpiritStone from '../items/spiritStone';

const props = defineProps({
    treasure: String
});

const emit = defineEmits(['taken']);

const takeItem = () => {
    inventory.addItem(createSpiritStone());
    emit('taken');
    modal.close();
}

</script>

<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
    display: block;
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 20px;
}

img {
    width: 300px;
}
</style>