<template>
    <span
        :class="[
            'node',
            props.node.class ? props.node.class + (props.center ? '' : ' hoverable') : '',
            props.center ? 'selected' : ''
        ]"
    >
        <span
            v-for="(location, locationIter) in node.locations"
            :key="locationIter"
            :class="['location', location]"
        ></span>
    </span>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    node: {},
    center: Boolean
});


</script>

<style scoped>
.node {
  width: 140px;
  height: 140px;
  display: inline-block;
  border-radius: 50px;
  border: 6px solid #0000;
  margin: 20px;
}

.node.hoverable:hover {
  border-color: yellow;
  cursor: pointer;
}

.node.selected {
  border-color: white;
}

.node.mountain {
  background-color: #d5d57b;
  background-image: url('../../assets/rock.jpg');
}

.node.forest {
  background-color: green;
  background-image: url('../../assets/forest.jpg');
}

.node.sea {
  background-color: blue;
  background-image: url('../../assets/sea.jpg');
}

.node.village {
  background-color: grey;
  background-image: url('../../assets/hay.jpg');
}

.node .location {
  width: 55px;
  height: 55px;
  margin: 10px;
  border-radius: 15px;
  display: inline-block;
}

.node .location.dungeon {
  background-image: url('../../assets/dungeon-icon.jpg');
  background-size: 100% 100%;
}
</style>