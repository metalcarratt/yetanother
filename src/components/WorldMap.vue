<template>
    <h1>Yet another Xianxia</h1>
    <div class="view">
        <span class="column" v-for="(row, rowIter) in map" :key="rowIter">
            <span class="columnContainer">
                <span
                    :class="[
                        'node',
                        node.class ? node.class + ' hoverable' : '',
                        selected[0] === rowIter && selected[1] === nodeIter ? 'selected' : ''
                    ]"
                    v-for="(node, nodeIter) in row"
                    :key="nodeIter"
                    @click="clickNode"
                ></span>
            </span>
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';

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
    [M, M, S],
    [E, V, E]
];

const selected = ref([-1,-1]);

const clickNode = (rowIter, nodeIter) => {
    console.log("clicked node");
    selected.value = [rowIter, nodeIter];
}

</script>