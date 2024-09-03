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
    display: grid;
    grid-template-columns: 200px calc(100vw - 200px)
}

.body {
    border-radius: 20px;
    height: calc(100vh - 200px);
}
</style>