<template>
    <button :class="props.colour" @click="emit('click')">
        <slot></slot>
    </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    colour: String
});

const emit = defineEmits(['click']);
</script>

<style scoped>
button {
    font-size: 18px;
    padding: 15px 40px;
    border: 1px solid black;
}

button:hover {
    cursor: pointer;
}

button.green {
    background-color: #63d543;
    border-color: #0a4d04
}

button.green:hover {
    background-color: #a6dc97;
}

button.red {
    background-color: #db3636;
    border-color: #4d0404
}

button.red:hover {
    background-color: #db3636;
}

button.blue {
    background-color: #b2b2f7;
    border-color: #38397b;
}

button.blue:hover {
    background-color: #dedefb;
}
</style>