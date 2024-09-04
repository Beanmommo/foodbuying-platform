<script setup lang="ts">
</script>
<template>
    <div class="wrapper">
        <LabelPage>Dashboard</LabelPage>
        <GraphFoodPrices />
        <div class="spendingStats">
            <GraphSpendingCategory />
            <TableRecentOrder />
        </div>
        <ul>
            <li>
                show trends on food prices - 3 items
            </li>
            <li>
                total spending [by categories]
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.spendingStats {
    display: grid;
    grid-template-columns: 60% 40%;
}

.wrapper {
    display: grid;
    gap: $margin;
}
</style>
