<template>
    <div class="dungeon">
        <div class="previousFloor">
            <span :class="['floor', getPreviousFloorType()]" @click="moveBack()"></span>
        </div>
        <div class="currentFloor">
            <font-awesome-icon icon="fa-solid fa-up-long" />
            <span :class="['floor', floors[currentFloor].type]"></span>
        </div>
        <div :class="['nextFloors', floors[currentFloor].next && floors[currentFloor].next.length === 1 ? 'single' : '']">
            <span
                class="nextFloor"
                v-for="(floorIndex, keyIndex) in floors[currentFloor].next"
                :key="keyIndex"
            >
                <font-awesome-icon icon="fa-solid fa-down-long" />
                <span :class="['floor', floors[floorIndex].type]" @click="moveToFloor(floorIndex)"></span>
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter();

const floors = [];
floors[0] = {
    type: 'cave',
    next: [1, 2],
    previous: -1
}
floors[1] = {
    type: 'cave',
    previous: 0
}
floors[2] = {
    type: 'cave',
    next: [3],
    previous: 0
}

floors[3] = {
    type: 'cave',
    previous: 2
}

const currentFloor = ref(0);

const moveToFloor = (floorIndex) => {
    currentFloor.value = floorIndex;
}

const moveBack = () => {
    const current = floors[currentFloor.value];
    if (current.previous != -1) {
        currentFloor.value = current.previous;
    } else {
        router.push('/world')
    }
}

const getPreviousFloorType = () => {
    const current = floors[currentFloor.value];
    if (current.previous != -1) {
        return floors[current.previous].type;
    } else {
        return 'exit';
    }
}

</script>

<style scoped>
.dungeon {
    width: 400px;
    margin: 0 auto;
}

.floor {
    display: block;
    height: 50px;
    border: 1px solid black;
}

.cave {
    background-image: url('../../assets/cave-longshot.png');
    background-size: 100% 100%;
}

.exit {
    background-image: url('../../assets/sky.png');
    background-size: 100% 100%;
}

.fa-down-long, .fa-up-long {
    font-size: 40px;
    color: #edd938;
    margin-bottom: 5px;
}

/* Previous floor */
.previousFloor {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.previousFloor .floor {
    width: 200px;
    border: 4px solid white;
}

.previousFloor .floor:hover {
    border: 4px solid yellow;
    cursor: pointer;
}

/* current floor */
.currentFloor {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
}

.currentFloor .floor {
    width: 400px;
    border: 4px solid blue;
}


/* next floors */
.nextFloors {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}

.nextFloors.single {
    justify-content: center;
}

.nextFloor {
    display: flex;
    flex-direction: column;
}

.nextFloor .floor {
    width: 120px;
    border: 4px solid white;
}

.nextFloor .floor:hover {
    border: 4px solid yellow;
    cursor: pointer;
}

</style>