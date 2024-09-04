<template>
    <div class="foodPrices">
        <CardFoodPriceChanges food-name="Avocado" price-change="-0.2" />
        <CardFoodPriceChanges food-name="Maryland Chicken" price-change="1.3" />
        <CardFoodPriceChanges food-name="Duck Egg" price-change="0.9" />
    </div>

</template>

<style lang="scss" scoped>
.foodPrices {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 20px;
}
</style>