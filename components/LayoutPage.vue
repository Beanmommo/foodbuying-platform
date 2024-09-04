<template>
    <div class="wrapper">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    display: grid;
    gap: $margin;
}
</style>