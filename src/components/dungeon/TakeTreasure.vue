<template>
    <ShowModal>
        <h1>Take Treasure</h1>
        {{ props.treasure }}
        <SmallButton colour="green" @click="emit('taken')">Okay</SmallButton>
    </ShowModal>
</template>

<script setup>
import ShowModal from '../common/ShowModal.vue';
import SmallButton from '../common/SmallButton.vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    treasure: String
});

const emit = defineEmits(['taken']);

</script>