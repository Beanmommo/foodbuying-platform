<script setup lang="ts">
const ingredient = ref('')
const testStore = useTestStore()
const { test } = storeToRefs(testStore)
</script>
<template>
    <Button label="Check" icon="pi pi-check" />
    <p>Hoal</p>
    {{ test }}
</template>

<style lang="scss" scoped></style>
