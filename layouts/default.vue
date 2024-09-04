<template>
    <LayoutHeader />
    <LayoutContent>
        <template #menu>
            <div class="menu">
                <NuxtLink to="/">Dashboard</NuxtLink>
                <NuxtLink to="/browse">Browse</NuxtLink>
                <NuxtLink to="/customList">Custom list</NuxtLink>
                <NuxtLink to="/favorite">Favorites</NuxtLink>
                <NuxtLink to="/activity">Activity</NuxtLink>
            </div>
        </template>
        <template #body>
            <slot />
        </template>
    </LayoutContent>
</template>

<style lang="scss" scoped>
.menu {
    display: grid;
    gap: $margin;
}
</style>