<script setup lang="ts">
import headerNavigation from "../content/headerNavigation.json"
const navigationItems = ref(headerNavigation.navigationItems)
</script>

<template>
    <div class="header">
        <span>FoodMania</span>
        <div>Menu</div>
        <div>Profile</div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    margin-left: auto;
    margin-right: auto;
    width: 1920px;
    height: 80px;
    align-items: center;
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    margin-bottom: $margin;
}
</style>