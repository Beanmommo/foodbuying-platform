<template>
    <div class="content">
        <div class="menu">
            <slot name="menu" />
        </div>
        <div class="body">
            <slot name="body" />
        </div>
        <div class="side">
            <slot name="side" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content {
    padding-top: $margin;
    margin-left: auto;
    margin-right: auto;
    width: 1920px;
    display: grid;
    grid-template-columns: 200px 1fr 200px;
}

.menu {
    display: grid;
    gap: $margin;
}
</style>