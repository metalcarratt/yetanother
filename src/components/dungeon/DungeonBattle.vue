<template>
    <div class="matte">
        <div class="modal">
            <h2>You have encountered a {{ props.monster }}</h2>
            <div class="fields">
                <div class="field monster">
                    <img src="../../assets/fenrir_wolf.png" />
                </div>
                <div class="field hero">
                    <img src="../../assets/hero.png" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    monster: String
});
</script>

<style scoped>
.matte {
    width: 100%;
    height: 100%;
    background-color: #000a;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    width: 800px;
    background-color: white;
}

h2 {
    text-align: center;
}

.fields {
    display: flex;
    justify-content: center;
}

.field {
    width: 300px;
    height: 300px;
    border: 1px solid black;
    margin: 20px;
    background-image: url('../../assets/cave-longshot.png');
    background-size: 100% 100%;
}

.hero img {
    transform: scaleX(-1);
}
</style>