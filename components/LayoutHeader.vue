<script setup lang="ts">
import headerNavigation from "../content/headerNavigation.json"
const navigationItems = ref(headerNavigation.navigationItems)
</script>

<template>
    <Menubar :model="navigationItems">
        <template #item="{ item }">
            <span :class="item.icon" />
            <NuxtLink :to="item.route">
                {{ item.label }}
            </NuxtLink>
        </template>

    </Menubar>
</template>

<style lang="scss" scoped>
.header {
    padding: $margin;
    border-bottom: 1px solid #c4c4c4;
}
</style>