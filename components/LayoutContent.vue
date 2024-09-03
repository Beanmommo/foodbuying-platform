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
    width: $max-page-width;
    display: grid;
    grid-template-columns: $logo-width 1fr;
}

.body {
    border-radius: 20px;
    height: calc(100vh - 200px);
}
</style>