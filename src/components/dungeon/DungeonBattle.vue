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
            monster hp: {{ monster.hp }}
            hero hp: {{ hero.hp }}
            <div class="action-buttons">
                <button @click="attack">Attack</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
    monster: String
});

const emit = defineEmits(['battleOver']);

const monster = ref({
    hp: 60,
    attack: 10
});

const hero = ref({
    hp: 40,
    attack: 20
});

const attack = () => {
    monster.value.hp -= hero.value.attack;
    if (monster.value.hp <= 0) {
        emit('battleOver');
    }
    hero.value.hp -= monster.value.attack;
}

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
    padding: 20px;
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
    display: flex;
    justify-content: flex-end;
}

.hero img {
    transform: scaleX(-1);
}

.action-buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 50px;
}

button {
    font-size: 18px;
    padding: 15px 40px;
    background-color: #db3636;
    border: 1px solid #4d0404;
}

button:hover {
    cursor: pointer;
    background-color: #db7878;
}
</style>