<template>
    <div class="inventory-item">
        <img src="../../assets/sstone.jpg" v-if="props.item.type === 'Spirit Stone'"/>
        <label>{{ props.item.type }}</label>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    item: {}
});
</script>

<style scoped>
.inventory-item {
    border: 3px solid #fff3e3;
    padding: 3px;
    margin: 5px;
    display: inline-block;
}

.inventory-item:hover {
    cursor: pointer;
    background-color: #fff3e3;
    border-color: #ffd49a;
}

.inventory-item img {
    width: 150px;
}

.inventory-item label {
    display: block;
    font-size: 20px;
}
</style>