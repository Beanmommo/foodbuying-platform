<script setup lang="ts">

const testStore = useTestStore()
const { test, testProp } = storeToRefs(testStore)
const lmaoProp = ref({})
onMounted(() => {
    lmaoProp.value = useCloneDeep(testProp)
})
</script>
<template>
    <Button label="Check" icon="pi pi-check" />
    <p>Hoal</p>
    <p>{{ test }}</p>
    <p>{{ lmaoProp }}</p>
</template>

<style lang="scss" scoped></style>
