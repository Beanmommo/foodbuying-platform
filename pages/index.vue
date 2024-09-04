<script setup lang="ts">
</script>
<template>
    <LayoutPage>
        <LabelPage>Dashboard</LabelPage>
        <div class="wrapper">

            <GraphFoodPrices />
            <div class="spendingStats">
                <GraphSpendingCategory />
                <TableRecentOrder />
            </div>
        </div>
    </LayoutPage>
</template>

<style lang="scss" scoped>
.spendingStats {
    display: grid;
    grid-template-columns: 60% 40%;
}
</style>
