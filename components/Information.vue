<script setup lang="ts">
defineProps({
    label: {
        type: String,
    },
    value: {
        type: String,
    },
})
</script>

<template>
    <div class="information">
        <span class="information__label">{{ label }}</span>
        <span class="information__separator">:</span>
        <span class="information__value">{{ value }}</span>
    </div>
</template>

<style lang="scss" scoped>
.information {
    display: grid;
    grid-template-columns: 100px 5px 1fr;
    gap: $margin
}
</style>