<script setup lang="ts">
const router = useRoute()

const home = ref({
    route: '/',
    icon: 'pi pi-home'
})

const items = ref([
    {
        label: 'Browse',
        route: '/browse'
    },
    { label: 'Pantry', route: '/browse/pantry' },
    { label: 'Sauces', route: '/browse/pantry' },
    { label: 'Some Chinese Brand: Soy Sauce 1750ml' }
])
</script>

<template>
    <LayoutPage>
        <LabelPage>Item Name</LabelPage>
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
    </LayoutPage>
</template>