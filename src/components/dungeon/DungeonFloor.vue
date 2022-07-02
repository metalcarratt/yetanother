<template>
    <span :class="classes()" @click="onClick()">
        <slot></slot>
    </span>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    type: String,
    clickable: Boolean,
    size: String
});

const emit = defineEmits(['click']);

const onClick = () => {
    emit('click');
}

const classes = () => {
    const _classes = [];
    _classes.push('floor');
    _classes.push(props.type);
    if (props.clickable) {
        _classes.push('clickable');
    }
    if (props.size) {
        _classes.push(props.size);
    }
    return _classes;
}
</script>

<style scoped>
.floor {
    display: flex;
    height: 400px;
    border: 4px solid blue;
    width: 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.floor.clickable {
    border: 4px solid white;
}

.floor.clickable:hover {
    border: 4px solid yellow;
    cursor: pointer;
}

.cave {
    background-image: url('../../assets/cave_floor.jpg');
    background-size: 100% 100%;
}

.exit {
    background-image: url('../../assets/sky.png');
    background-size: 100% 100%;
}

.s120 {
    width: 120px;
    height: 50px;
}

.s200 {
    width: 200px;
    height: 50px;
}
</style>