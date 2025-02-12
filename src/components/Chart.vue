<script setup>
import { ref, onMounted } from 'vue';
import { Chart,registerables } from 'chart.js';

import dateFormatter from '../dateFormatter';

Chart.register(...registerables)//register all necessary Chart.js components

//pass the json data as a prop
const props = defineProps({
  passedData: Array,
})

//configure the data to pass to the chart as needed
const timeData=[];
const DE_Prices=[];
const GR_Prices=[];
const FR_Prices=[];

props.passedData.forEach((obj)=>{
    timeData.push(dateFormatter(obj.DateTime));
    DE_Prices.push(obj.ENTSOE_DE_DAM_Price);
    GR_Prices.push(obj.ENTSOE_GR_DAM_Price);
    FR_Prices.push(obj.ENTSOE_FR_DAM_Price);

})

//datasets for the chart
const dataSets= [
    {
        label: 'DE Price',
        data: DE_Prices,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        tension: 0.5
    },
    {
        label: 'GR Price',
        data: GR_Prices,
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        tension: 0.5
    },
    {
        label: 'FR Price',
        data: FR_Prices,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        tension: 0.5
    },
]


const stellarChart = ref();

onMounted(() => { //execute when component has been rendered
    
  new Chart(stellarChart.value, {
    type: 'line',
    data: {
        labels: timeData,
        datasets: dataSets,
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
            x: {
                ticks: {
                    maxTicksLimit: 10, //limit number of X-axis labels
                },
            },
        },
    },
  });

});

</script>

<template>

  <div class="chart relative w-11/12 mx-auto mt-10 border-t-4 border-indigo-600 shadow-lg md:mt-20">
    <canvas ref="stellarChart"></canvas>
  </div>
  
</template>
