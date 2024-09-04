<template>
    <div class="foodPrices">
        <CardFoodPriceChanges food-name="Some Chinese Brand: Silk Tofu" price-change="-0.2" />
        <CardFoodPriceChanges food-name="Chicken Maryland" price-change="1.3" />
        <CardFoodPriceChanges food-name="Egg large carton 25pc" price-change="0.9" />
    </div>
</template>

<style lang="scss" scoped>
.foodPrices {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 20px;
}
</style>