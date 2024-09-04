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
    { label: 'Pantry' },
])

const selectedCategory = ref()
const categoryOptions = ref([
    { name: 'Sauces' },
    { name: 'Spices' },
    { name: 'Noodles' },
    { name: 'Rice' },
    { name: 'Tofu' },
    { name: 'Condiments' },
    { name: 'Other' },
])

const catalogItems = ref([
    {
        name: 'Some Chinese Brand: Soy Sauce 1750ml',
        imageUrl: 'https://assets.woolworths.com.au/images/1005/74999.jpg?impolicy=wowsmkqiema&w=1200&h=1200',
        route: '/browse/item/Some Chinese Brand: Soy Sauce 1750ml'
    },
    {
        name: 'SunRice: Medium Grain Rice 10kg',
        imageUrl: 'https://assets.woolworths.com.au/images/1005/75816.jpg?impolicy=wowsmkqiema&w=1200&h=1200'
    },
    {
        name: 'Some Chinese Brand: Hoisin Sauce 1500ml',
        imageUrl: 'https://assets.kogan.com/images/tastefuldelights/TSF-734537/1-d5fb12f6d7-lee-kum-kee-hoisin-sauce-22kg.jpg?auto=webp&bg-color=fff&canvas=753%2C502&fit=bounds&height=502&quality=90&width=753'
    },
    {
        name: 'Some Chinese Brand: Firm Tofu 900g',
        imageUrl: 'https://assets.woolworths.com.au/images/1005/595732.jpg?impolicy=wowsmkqiema&w=1200&h=1200'
    },
    {
        name: 'Some Chinese Brand: Soy Sauce 1750ml',
        imageUrl: 'https://assets.woolworths.com.au/images/1005/74999.jpg?impolicy=wowsmkqiema&w=1200&h=1200'
    },
    {
        name: 'SunRice: Medium Grain Rice 10kg',
        imageUrl: 'https://assets.woolworths.com.au/images/1005/75816.jpg?impolicy=wowsmkqiema&w=1200&h=1200'
    },
    {
        name: 'Some Chinese Brand: Hoisin Sauce 1500ml',
        imageUrl: 'https://assets.kogan.com/images/tastefuldelights/TSF-734537/1-d5fb12f6d7-lee-kum-kee-hoisin-sauce-22kg.jpg?auto=webp&bg-color=fff&canvas=753%2C502&fit=bounds&height=502&quality=90&width=753'
    },
    {
        name: 'Some Chinese Brand: Firm Tofu 900g',
        imageUrl: 'https://assets.woolworths.com.au/images/1005/595732.jpg?impolicy=wowsmkqiema&w=1200&h=1200'
    },
    {
        name: 'Some Chinese Brand: Hoisin Sauce 1500ml',
        imageUrl: 'https://assets.kogan.com/images/tastefuldelights/TSF-734537/1-d5fb12f6d7-lee-kum-kee-hoisin-sauce-22kg.jpg?auto=webp&bg-color=fff&canvas=753%2C502&fit=bounds&height=502&quality=90&width=753'
    },
    {
        name: 'Some Chinese Brand: Firm Tofu 900g',
        imageUrl: 'https://assets.woolworths.com.au/images/1005/595732.jpg?impolicy=wowsmkqiema&w=1200&h=1200'
    }
])
</script>

<template>
    <LayoutPage>
        <LabelPage>Browse {{ router.params.category }}</LabelPage>
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