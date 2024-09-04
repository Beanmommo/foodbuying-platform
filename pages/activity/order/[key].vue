<script setup lang="ts">
const route = useRoute()
const key = ref(route.params.key as string)

const home = ref({
    route: '/',
    icon: 'pi pi-home'
})

const items = ref([
    { label: 'Activity', route: '/activity' },
    { label: 'Order', route: '/activity/order' },
    { label: key.value }
])

const customer = ref({
    name: 'Leonardo Prasetyo',
    address: '33 Batman Street, Gotham City',
})

const supplier = ref({
    name: 'Qiksolve pty ltd',
    address: '45 Chancelor Walk, North Dandenong',
})

const order = ref({
    date: '2021-09-26',
    orderNo: key.value,
    status: 'Completed',
    customer: customer.value,
    supplier: supplier.value,
    items: [
        {
            product: 'Some Chinese Brand: Grounded Garlic 200g',
            category: 'Spices & Sauces',
            quantity: 2,
            amountPerItem: 4.99,
        },
        {
            product: 'Pork Belly 1kg',
            category: 'Meat',
            quantity: 2,
            amountPerItem: 32.49,
        },
        {
            product: 'Some Chinese Brand: Black Soy sauce 1000ml',
            category: 'Spices & Sauces',
            quantity: 1,
            amountPerItem: 16.99,
        },
        {
            product: 'Some Chinese Brand: Hoisin sauce 1000ml',
            category: 'Spices & Sauces',
            quantity: 1,
            amountPerItem: 14.99,
        }
    ],
    fees: [
        {
            name: 'Shipping',
            description: 'Standard Shipping to Gotham City',
            amount: 10.00
        },
    ]
})

const totalAmount = computed(() => {
    return `$ ${order.value.items.reduce((acc, item) => acc + item.quantity * item.amountPerItem, 0).toFixed(2)}`
})

</script>

<template>
    <LayoutPage>
        <LabelPage>Order No: {{ key }}</LabelPage>
        <Breadcrumb :home="home" :model="items">
            <template #item="{ item, props }">
                <NuxtLink :to="item.route" v-if="item.route" style="text-decoration: none;">
                    <template v-if="item.icon">
                        <span :class="item.icon" />
                    </template>
                    {{ item.label }}
                </NuxtLink>
                <span v-else class=" font-semibold">{{ item.label }}</span>
            </template>
        </Breadcrumb>

        <div class="information__wrapper">
            <div class="information__section">
                <LabelSection>Order Information</LabelSection>
                <Information label="Date" :value="order.date" />
                <Information label="Status" :value="order.status" />
            </div>
            <div class="information__section">
                <LabelSection>Customer</LabelSection>
                <Information label="Name" :value="customer.name" />
                <Information label="Address" :value="customer.address" />
            </div>
            <div class="information__section">
                <LabelSection>Suplier</LabelSection>
                <Information label="Name" :value="supplier.name" />
                <Information label="Address" :value="supplier.address" />
            </div>
        </div>

        <DataTable :value="order.items">
            <Column field="product" header="Product" />
            <Column field="category" header="Category" />
            <Column field="quantity" header="Quantity" />
            <Column field="amountPerItem" header="Amount Per Item">
                <template #body="{ data }">
                    <span>{{ '$ ' + data.amountPerItem.toFixed(2) }}</span>
                </template>
            </Column>
            <Column header="Total Amount">
                <template #body="{ data }">
                    <span class=" font-semibold text-slate-500">{{ '$ ' + (data.quantity *
                        data.amountPerItem).toFixed(2) }}</span>
                </template>
            </Column>
            <ColumnGroup type="footer">
                <Row>
                    <Column :colspan="4" footer-style="text-align: right" footer="Total:" />
                    <Column :footer="totalAmount" />
                </Row>
            </ColumnGroup>
        </DataTable>

    </LayoutPage>
</template>

<style lang="scss" scoped>
.information__wrapper {
    display: grid;
    gap: $margin
}

.information__section {
    display: grid;
    gap: $margin-sm
}
</style>