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
    overflow: auto;
    height: calc(100vh - $header-height);
    padding-top: $margin;
    display: grid;
    grid: auto-flow / 200px 1fr 200px;
}
</style>