<template>
    <div class="view">
        <span class="column" v-for="(row, rowIter) in map" :key="rowIter">
            <span class="columnContainer">
                <WorldNode
                    v-for="(node, nodeIter) in row"
                    :key="nodeIter"
                    :node="node"
                    :center="rowIter === 1 && nodeIter === 1"
                />
            </span>
        </span>
    </div>
    
    <RightButtons />
    <ViewInventory />
    <ViewItem />
</template>

<script setup>
import WorldNode from './WorldNode.vue';
import RightButtons from './RightButtons.vue';
import ViewInventory from '../inventory/ViewInventory.vue';
import ViewItem from '../inventory/ViewItem.vue';

const Home = {
    class: 'mountain',
    locations: [
        'dungeon'
    ]
}

const E = {};
const M = {
    class: 'mountain'
};
const F = {
    class: 'forest'
};
const S = {
    class: 'sea'
};
const V = {
    class: 'village'
}
const map = [
    [E, E, F],
    [M, Home, S],
    [E, V, E]
];
</script>

<style scoped>
.column {
  display: block;
  height: 188px;
  width: 100%;
  /* align-items: center; */
}

.columnContainer {
  display: flex;
  justify-content: center;
}

.view {
  /* background: rgb(69,54,33);
  background: linear-gradient(4deg, rgba(69,54,33,1) 0%, rgba(181,181,160,1) 65%, rgba(247,248,215,1) 91%, rgba(252,255,211,1) 100%);  */
  background-image: url('../../assets/map-texture.jpg');
  /* background-color: beige; */
  width: 600px;
  height: 600px;
  border-radius: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center; 
}
</style>