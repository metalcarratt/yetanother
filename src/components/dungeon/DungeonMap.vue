<template>
    <div class="dungeon">
        <div>
            <span :class="['floor', floors[currentFloor].type]"></span>
        </div>
        <div class="nextFloors">
            <span v-for="(floorIndex, keyIndex) in floors[currentFloor].next" :key="keyIndex" :class="['nextFloor', floors[floorIndex].type]"/>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const floors = [];
floors[0] = {
    type: 'cave',
    next: [1, 2]
}
floors[1] = {
    type: 'cave'
}
floors[2] = {
    type: 'cave'
}

const currentFloor = ref(0);

</script>

<style scoped>
.dungeon {
    width: 400px;
    margin: 0 auto;
}

.floor {
    display: block;
    width: 400px;
    height: 50px;
    border: 1px solid black;
}

.nextFloors {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}

.nextFloor {
    display: inline-block;
    width: 120px;
    height: 50px;
    border: 1px solid black;
}

.cave {
    background-image: url('../../assets/cave-longshot.png');
    background-size: 100% 100%;
}
</style>