<script setup lang="ts">
const home = ref({
    route: '/',
    icon: 'pi pi-home'
})

const items = ref([
    { label: 'Browse' },
])

const categories = ref([
    {
        name: 'Category 1',
    },
    {
        name: 'Category 2',
    },
    {
        name: 'Category 3',
    },
    {
        name: 'Category 4',
    },
    {
        name: 'Category 5',
    },
    {
        name: 'Category 6',
    },
    {
        name: 'Category 7',
    },
])
</script>

<template>
    <LabelPage>Browse</LabelPage>
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

    <div class="search__wrapper">
        <span class="pi pi-search" />
        <InputText placeholder="Search" class=" w-full" />
    </div>

    <div class="category__wrapper">
        <template v-for="category in categories">
            <Card>
                <template #content>
                    <Image alt="Category">
                        <template #image>
                            <img src="@/content/images/meat.jpg" />
                        </template>
                    </Image>

                    {{ category.name }}
                </template>
            </Card>
        </template>
    </div>
</template>

<style lang="scss" scoped>
.category__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.search__wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>