<script setup lang="ts">
const props = defineProps({
    foodName: {
        type: String,
        default: () => "Food Name"
    },
    priceChange: {
        type: Number,
        default: () => 0
    }
})

const iconIndicator = computed(() => {
    return props.priceChange > 0 ? "pi pi-arrow-circle-up green" : "pi pi-arrow-circle-down red"
})

const colorIndicator = computed(() => {
    return props.priceChange > 0 ? "green" : "red"
})
</script>

<template>
    <div class="wrapper">
        <span>
            {{ foodName }}
        </span>
        <NuxtLink to="/" style="text-decoration: none">
            <span class="priceChange">
                <span :class="colorIndicator" class="price">
                    {{ priceChange }}
                </span>
                <span :class="iconIndicator" />
            </span>
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    padding: $padding;
    border: 1px solid $border-card;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: $margin;
}

.price {
    font-weight: bold;
}

.priceChange {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid transparent;

    &:hover {
        box-sizing: border-box;
        cursor: pointer;
        border: 1px solid gray
    }
}

.green {
    color: green;
}

.red {
    color: red;
}
</style>