<script setup lang="ts">
const supplierPrices = ref([
    { supplierName: 'Golden Dragon Imports', price: 19.99 },
    { supplierName: 'Harmony Pantry Imports', price: 16.49 },
    { supplierName: 'Oriental Essentials Co.', price: 17.99 },
    { supplierName: 'Dragon Gate Ingredients', price: 21.25 },
    { supplierName: 'Silk Road Staples', price: 19.49 },
    { supplierName: 'Rice & Wok Supply Co.', price: 19.39 },
    { supplierName: 'Far East Flavor Imports', price: 18.99 },
    { supplierName: 'Jade Lantern Foods', price: 17.98 },
    { supplierName: 'Lotus Leaf Pantry Supply', price: 21.34 },
    // { supplierName: 'Kmart', price: 18.47 },
    // { supplierName: 'Big W', price: 18.47 },
    // { supplierName: 'Chemist Warehouse', price: 18.47 },
]);

const averagePrice = computed(() => {
    const total = supplierPrices.value.reduce((acc, supplier) => acc + supplier.price, 0);
    return total / supplierPrices.value.length;
});

function isLowerThanAverage(price: number) {
    return price < averagePrice.value;
}

function isSameAsAverage(price: number) {
    return price === averagePrice.value;
}
</script>

<template>
    <DataTable :value="supplierPrices" sort-field="price" :sort-order="1">
        <template #header>
            <LabelSection>Supplier Prices</LabelSection>
        </template>
        <Column field="supplierName" header="Supplier" />
        <Column field="price" header="Price" sortable>
            <template #body="{ data }">
                <span v-if="isLowerThanAverage(data.price)" class=" text-green-500">$ {{ data.price }}</span>
                <span v-else-if="isSameAsAverage(data.price)">$ {{ data.price }}</span>
                <span v-else class=" text-red-500">$ {{ data.price }}</span>
            </template>
        </Column>
        <Column>
            <template #body>
                <span class="pi pi-eye hover:bg-slate-100 p-2 rounded-lg cursor-pointer" />
            </template>
        </Column>
    </DataTable>
</template>