<script setup lang="ts">

const home = ref({
    route: '/',
    icon: 'pi pi-home'
})

const items = ref([
    {
        label: 'Browse',
        route: '/browse'
    },
    { label: 'Supplier' },
])

const selectedCategory = ref()
const categoryOptions = ref([
    { name: 'Meat' },
    { name: 'Seafood' },
    { name: 'Fruits' },
    { name: 'Vegetables' },
    { name: 'Eggs' },
    { name: 'Ingredients' },
    { name: 'Products' },
    { name: 'Packaging' },
])

const catalogItems = ref([
    {
        name: 'Pantry of the East',
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/010/852/922/original/shop-market-line-icon-outline-sign-linear-pictogram-free-png.png',
        route: '/browse/supplier/Pantry of the East'
    },
    {
        name: "Asia's Best Pantry",
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/010/852/922/original/shop-market-line-icon-outline-sign-linear-pictogram-free-png.png',
        route: '/browse/supplier/Asia\'s Best Pantry'
    },
    {
        name: 'Harmony Pantry Imports',
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/010/852/922/original/shop-market-line-icon-outline-sign-linear-pictogram-free-png.png',
        route: '/browse/supplier/Harmony Pantry Imports'
    },
    {
        name: 'Golden Dragon Imports',
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/010/852/922/original/shop-market-line-icon-outline-sign-linear-pictogram-free-png.png',
        route: '/browse/supplier/Golden Dragon Imports'
    },
    {
        name: 'Rice & Wok Supply Co.',
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/010/852/922/original/shop-market-line-icon-outline-sign-linear-pictogram-free-png.png',
        route: '/browse/supplier/Rice & Wok Supply Co.'
    },
    {
        name: 'Zen Pantry Supply Co.',
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/010/852/922/original/shop-market-line-icon-outline-sign-linear-pictogram-free-png.png',
        route: '/browse/supplier/Zen Pantry Supply Co.'
    },
    {
        name: 'Oriental Essentials Co.',
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/010/852/922/original/shop-market-line-icon-outline-sign-linear-pictogram-free-png.png',
        route: '/browse/supplier/Oriental Essentials Co.'
    },
    {
        name: 'Silk Road Staples',
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/010/852/922/original/shop-market-line-icon-outline-sign-linear-pictogram-free-png.png',
        route: '/browse/supplier/Silk Road Staples'
    },
    {
        name: 'Jade Lantern Foods',
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/010/852/922/original/shop-market-line-icon-outline-sign-linear-pictogram-free-png.png',
        route: '/browse/supplier/Jade Lantern Foods'
    },
    {
        name: 'Eastern Spice Ventures',
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/010/852/922/original/shop-market-line-icon-outline-sign-linear-pictogram-free-png.png',
        route: '/browse/supplier/Eastern Spice Ventures'
    }
])
</script>

<template>
    <LayoutPage>
        <LabelPage>Supplier </LabelPage>
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

        <div class="catalog__wrapper">
            <div class="catalog__filter">
                <Listbox v-model="selectedCategory" :options="categoryOptions" filter option-label="name" />
            </div>

            <div>
                <div class="catalog__item">
                    <template v-for="item in catalogItems">
                        <NuxtLink :to="item.route" style="text-decoration: none;">
                            <Card class=" hover:bg-gray-100">
                                <template #content>
                                    <div class="info__wrapper">
                                        <Image>
                                            <template #image>
                                                <img :src="item.imageUrl" width="160" class=" aspect-video"
                                                    :alt="item.name" />
                                            </template>
                                        </Image>
                                        {{ item.name }}
                                    </div>
                                </template>
                            </Card>
                        </NuxtLink>
                    </template>
                </div>
            </div>
        </div>

    </LayoutPage>
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

.info__wrapper {
    display: grid;
    gap: 0.5rem;
}

.catalog {
    &__wrapper {
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 1rem;
        margin-top: 1rem;
    }

    &__filter {
        padding-right: $margin;
    }

    &__item {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
        margin-bottom: 1rem;
    }
}
</style>