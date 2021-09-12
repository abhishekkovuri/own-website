<template>
    <div class="header-wrapper">
        <div class="logo-container">
            <img @click="() => $route.path !== '/' && $router.push('/')" class="logo pointer" :src="AK" alt="truecaller logo">
        </div>

    </div>
</template>

<script src="./header-component.js"></script>

<style lang="scss" scoped>
.header-wrapper {
    display: flex;
    justify-content: left;

    .logo {
        width: 50px;
    }
}
</style>
