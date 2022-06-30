<template>
    <div class="dungeon">
        <!-- Previous floor -->
        <div class="previousFloor">
            <DungeonFloor :type="getPreviousFloorType()" :clickable="true" size="s200" @click="moveBack()" />
        </div>

        <!-- Current floor -->
        <div class="currentFloor">
            <font-awesome-icon icon="fa-solid fa-up-long" />
            <DungeonFloor :type="floors[currentFloor].type" />
        </div>

        <!-- Next floors -->
        <div :class="['nextFloors', floors[currentFloor].next && floors[currentFloor].next.length === 1 ? 'single' : '']">
            <span
                class="nextFloor"
                v-for="(floorIndex, keyIndex) in floors[currentFloor].next"
                :key="keyIndex"
            >
                <font-awesome-icon icon="fa-solid fa-down-long" />
                <DungeonFloor :type="floors[floorIndex].type" :clickable="true" size="s120" @click="moveToFloor(floorIndex)"/>
            </span>
        </div>
    </div>
    <DungeonBattle v-show="inBattle" :monster="battleType" @battleOver="encounterOver" />
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import generateMap from './mapGenerator.js';
import DungeonFloor from './DungeonFloor.vue';
import DungeonBattle from './DungeonBattle.vue';

const router = useRouter();

const floors = generateMap();

const currentFloor = ref(0);
const inBattle = ref(false);
const battleType = ref('');

const moveToFloor = (floorIndex) => {
    currentFloor.value = floorIndex;
    const floor = floors[currentFloor.value];
    if (floor.encounter && !floor.encounter.beaten) {
        encounter(floor.encounter.type);
    }
}

const moveBack = () => {
    const current = floors[currentFloor.value];
    if (current.previous != -1) {
        moveToFloor(current.previous);
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

const encounter = (type) => {
    battleType.value = type;
    inBattle.value = true;
}

const encounterOver = () => {
    inBattle.value = false;
    const floor = floors[currentFloor.value];
    floor.encounter.beaten = true;
}

</script>

<style scoped>
.dungeon {
    width: 400px;
    margin: 0 auto;
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

/* current floor */
.currentFloor {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
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

</style>