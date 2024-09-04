<script setup lang="ts">

const toast = useToast();
function clickHandlerAdd() {
    toast.add({ severity: 'success', summary: 'Add Success', detail: `Successfully add Some Chinese Brand: Soy Sauce 1750ml to List`, life: 3000 })
    console.log('Add to List');
}
</script>

<template>
    <Toast />
    <Card>
        <template #content>
            <div class="item__details">
                <Image>
                    <template #image>
                        <img src="https://assets.woolworths.com.au/images/1005/74999.jpg?impolicy=wowsmkqiema&w=1200&h=1200"
                            width="200" alt="item-name" />
                    </template>
                </Image>
                <span>
                    <h2>Some Chinese Brand: Soy Sauce 1750ml</h2>
                    <p>Average Market Price: <b>$18.47</b></p>
                    <p>Weight: 1750g</p>
                    <p>Category: Sauces</p>
                    <p>Brand: Some Chinese Brand</p>
                </span>
                <div class="item__button">
                    <div>
                        <Button label="Add to List" icon="pi pi-plus" @click="clickHandlerAdd" />
                    </div>
                </div>
            </div>
        </template>
    </Card>

    <Card>
        <template #content>
            <LabelSection>Price Stats</LabelSection>
            <GraphItemPrices />
        </template>
    </Card>

    <Card>
        <template #content>
            <TableSupplierPrices />
        </template>
    </Card>
</template>

<style lang="scss" scoped>
.item__details {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
}

.item__button {
    display: grid;
    gap: $margin;
}
</style>
