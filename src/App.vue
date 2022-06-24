<template>
  <WorldMap/>
</template>

<script setup>
import WorldMap from './components/WorldMap.vue';
</script>


<style>
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

.node {
  width: 140px;
  height: 140px;
  display: inline-block;
  /* background-color: #d5d57b; */
  border-radius: 50px;
  border: 4px solid #0000;
  margin: 20px;
}

.node.hoverable:hover {
  border-color: white;
  cursor: pointer;
}

.node.mountain {
  background-color: #d5d57b;
  background-image: url('./assets/rock.jpg');
}

.node.forest {
  background-color: green;
  background-image: url('./assets/forest.jpg');
}

.node.sea {
  background-color: blue;
  background-image: url('./assets/sea.jpg');
}

.node.village {
  background-color: grey;
  background-image: url('./assets/hay.jpg');
}

.view {
  /* background: rgb(69,54,33);
  background: linear-gradient(4deg, rgba(69,54,33,1) 0%, rgba(181,181,160,1) 65%, rgba(247,248,215,1) 91%, rgba(252,255,211,1) 100%);  */
  background-image: url('./assets/map-texture.jpg');
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
