<template>
    <ShowModal v-if="modal.isShowingModal('MessageModal')">
        <p>{{ props.message }}</p>
        <SmallButton colour="green" @click="emit('close')">Close</SmallButton>
    </ShowModal>
</template>

<script setup>
import modal from './modal';
import ShowModal from './ShowModal.vue';
import SmallButton from '../common/SmallButton.vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    message: String
});

const emit = defineEmits(['close']);
</script>