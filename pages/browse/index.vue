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
        name: 'Meat',
        imageUrl: 'https://www.airproducts.com/-/media/images/1440x810/masthead/183423715-raw-steaks-16x9.jpg?as=0&w=1439&hash=3805B6B1BCCF769DC00E705177C8C680',
    },
    {
        name: 'Seafood',
        imageUrl: 'https://t3.ftcdn.net/jpg/00/59/87/44/360_F_59874477_8Znck93Em3CMIxwNqsTFImfNI9Xx65p4.jpg'
    },
    {
        name: 'Fruits',
        imageUrl: 'https://gobackpacking.com/wp-content/uploads/2020/02/Durian.jpg'
    },
    {
        name: 'Vegetables',
        imageUrl: 'https://www.cannonlogistics.com.au/wp-content/uploads/2017/04/Cannons-Asian-Greens.jpg'

    },
    {
        name: 'Eggs',
        imageUrl: 'https://www.healthxchange.sg/sites/hexassets/Assets/food-nutrition/Eggs-and-milk-are-they-healthy.jpg'
    },
    {
        name: 'Ingredients',
        imageUrl: 'https://assets.woolworths.com.au/images/1005/595732.jpg?impolicy=wowsmkqiema&w=600&h=600'
    },
    {
        name: 'Pantry',
        imageUrl: 'https://thewoksoflife.com/wp-content/uploads/2022/10/Chinese-Ingredients-Glossary-Sauces.jpg'
    },
    {
        name: 'Products',
        imageUrl: 'https://lh4.googleusercontent.com/proxy/kljvWOTQdlrVRQmHpov-ij0N4Tw13YAfEcCGyzZFbzpkFh-6Qi7x0hIt-ACc2R13a1Zdf-TjXJXTR8awfE5QrAJxKLuqZl2sp2NbyasBrMP7VeW7UNFMr2mRR5L-edQ84_4'
    },
    {
        name: 'Packaging',
        imageUrl: 'https://www.nvpackaging.com.au/media/catalog/category/Main_Page_1_1.jpg'
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
                    <div class="info__wrapper">
                        <Image>
                            <template #image>
                                <img :src="category.imageUrl" width="180" class=" aspect-video" :alt="category.name" />
                            </template>
                        </Image>
                        {{ category.name }}
                    </div>
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

.info__wrapper {
    display: grid;
    gap: 0.5rem;
}
</style>