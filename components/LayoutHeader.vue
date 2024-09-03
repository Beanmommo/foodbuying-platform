<script setup lang="ts">
// import headerNavigation from "../content/headerNavigation.json"
// const navigationItems = ref(headerNavigation.navigationItems)
</script>

<template>
    <div class="header">
        <span>FoodMania</span>
        <div>test</div>
        <div>Profile</div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    margin-left: $margin;
    margin-bottom: $margin;
    height: 80px;
    align-items: center;
    display: grid;
    grid-template-columns: 200px calc(100vw - 400px) 200px;
    margin-bottom: $margin;
}
</style>