<script setup lang="ts">
const router = useRoute()
const itemName = router.params.item as string
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
    { label: itemName }
])
</script>

<template>
    <LayoutPage>
        <LabelPage>{{ itemName }}</LabelPage>
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
        <SectionItemDetail />
    </LayoutPage>
</template>