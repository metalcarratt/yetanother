<template>
    <div class="buttons right">
        <button @click="$router.push('/dungeon')">Enter Dungeon</button>
        <button>Patrol</button>
    </div>
</template>

<style scoped>
.buttons {
    position: absolute;
    z-index: 10;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.buttons.right {
    right: 0;
    top: 0;
}

button {
    border: 2px solid #070729;
    background-color: #121298;
    color: #efdbcf;
    padding: 12px 16px 12px 32px;
    clip-path: polygon(0 0%, 100% 0, 100% 100%, 10% 100%);
    display: block;
    margin-bottom: 10px;
    text-align: right;
}

button:hover {
    cursor: pointer;
    /* padding: 12px 16px 12px 60px; */
    width: 200px;
    background-color: #1313bc;
    border-color: #b2b2e0;
    
}
</style>