<script setup lang="ts">
// import headerNavigation from "../content/headerNavigation.json"
// const navigationItems = ref(headerNavigation.navigationItems)
</script>

<template>
    <div class="header">
        <span class="logo">FoodMania</span>
        <div></div>
        <div>Profile</div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    padding-bottom: $margin;
    display: grid;
    grid: auto-flow / 200px 1fr 200px;
}
</style>