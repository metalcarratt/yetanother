<template>
    <div class="matte">
        <div class="modal">
            <slot></slot>
        </div>
    </div>
</template>

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
</style>