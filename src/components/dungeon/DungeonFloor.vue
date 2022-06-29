<template>
    <span :class="classes()" @click="onClick()"></span>
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
    display: block;
    height: 50px;
    border: 4px solid blue;
    width: 400px;
}

.floor.clickable {
    border: 4px solid white;
}

.floor.clickable:hover {
    border: 4px solid yellow;
    cursor: pointer;
}

.cave {
    background-image: url('../../assets/cave-longshot.png');
    background-size: 100% 100%;
}

.exit {
    background-image: url('../../assets/sky.png');
    background-size: 100% 100%;
}

.s120 {
    width: 120px;
}

.s200 {
    width: 200px;
}
</style>