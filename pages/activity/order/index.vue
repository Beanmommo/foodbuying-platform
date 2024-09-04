<script setup lang="ts">
const home = ref({
    route: '/',
    icon: 'pi pi-home'
})

const items = ref([
    { label: 'Activity', route: '/activity' },
    { label: 'Orders' }
])
</script>

<template>
    <LayoutPage>
        <LabelPage>Orders</LabelPage>
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
        <TableAllOrder />
        Show all recent orders
    </LayoutPage>

</template>
