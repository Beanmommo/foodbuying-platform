<script setup lang="ts">
const recentOrder = [{
    date: '2021-09-26',
    orderNo: 'A123',
    amount: '$ 100.00'
},
{
    date: '2021-09-25',
    orderNo: 'A122',
    amount: '$ 200.00'
},
{
    date: '2021-09-24',
    orderNo: 'A121',
    amount: '$ 300.00'
},
{
    date: '2021-09-23',
    orderNo: 'A120',
    amount: '$ 400.00'
},
{
    date: '2021-09-23',
    orderNo: 'A120',
    amount: '$ 400.00'
}
    , {
    date: '2021-09-23',
    orderNo: 'A120',
    amount: '$ 400.00'
}, {
    date: '2021-09-23',
    orderNo: 'A120',
    amount: '$ 400.00'
},
{
    date: '2021-09-23',
    orderNo: 'A120',
    amount: '$ 400.00'
},
{
    date: '2021-09-23',
    orderNo: 'A120',
    amount: '$ 400.00'
},
{
    date: '2021-09-23',
    orderNo: 'A120',
    amount: '$ 400.00'
},
{
    date: '2021-09-23',
    orderNo: 'A120',
    amount: '$ 400.00'
}
];
</script>

<template>
    <div>
        <LabelSection>Recent Orders</LabelSection>
        <DataTable :value="recentOrder" paginator :rows="8">
            <Column field="date" header="Date" />
            <Column field="orderNo" header="Order No.">
                <template #body="{ data }">
                    <NuxtLink :to="'activity/order/' + data.orderNo">
                        <span>{{ data.orderNo }}</span>
                    </NuxtLink>
                </template>
            </Column>
            <Column field="amount" header="Amount" />
        </DataTable>
    </div>

</template>