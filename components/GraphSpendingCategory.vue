<script setup lang="ts">

const chartData = ref();
const chartOptions = ref();

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const setChartData = () => {
    const documentStyle = getComputedStyle(document.body);

    return {
        labels: ['Meat', 'Packaging', 'Spices'],
        datasets: [
            {
                data: [540, 325, 702],
                backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500'), documentStyle.getPropertyValue('--p-gray-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-gray-400')]
            }
        ]
    };
};

const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');

    return {
        plugins: {
            legend: {
                labels: {
                    cutout: '60%',
                    color: textColor
                }
            }
        }
    };
};
</script>

<template>
    <div>

        <div class="wrapper">
            <Chart type="doughnut" :data="chartData" :options="chartOptions!" class="md:w-[30em] w-full" />
            <span class="amountSpent">
                <LabelSection>Total Spending</LabelSection>
                <div>
                    $ 1567.00
                </div>
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.amountSpent {
    font-size: 3vw;
    font-weight: 500;
    color: purple;
    margin-right: 1rem;
    height: 100%;
    align-items: center;
}
</style>
