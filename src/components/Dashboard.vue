<script setup>
import { ref, computed } from 'vue';

import Table from './Table.vue';
import Chart from './Chart.vue';
import DateFilter from './filters/DateFilter.vue';
import Modal from './Modal.vue';
import ToggleTimeseries from './filters/ToggleTimeseries.vue';
import Filters from './filters/Filters.vue';

const props = defineProps({
    timeSeriesData: Array,
});

const timeSeriesData = ref([...props.timeSeriesData]);

const minDate = ref(null);
const maxDate = ref(null);

const modal = ref(null);

//get the date range
function handleDateFilter(min, max) {
    minDate.value = new Date(min);
    maxDate.value = new Date(max);
    console.log(minDate.value, maxDate.value);
}

//update the data values in the table
function handleDataUpdate(index, key, event) {
    //convert the input value to a number
    const changedValue = parseFloat(event.target.innerText);
    //console.log(changedValue);

    if( !isNaN(changedValue) && (changedValue >= -2000 && changedValue <= 2000) ){
        // Find the original index in timeSeriesData and compare it with the index in filteredData Array that we are using
        const originalIndex = timeSeriesData.value.findIndex((item) => item.DateTime === filteredData.value[index].DateTime);

        if (originalIndex !== -1) {
            //this will update the value in the table but the reactivity is not triggered because the array is not changed
            timeSeriesData.value[originalIndex][key] = changedValue;

            //trigger reactivity by creating a new array
            timeSeriesData.value = [...timeSeriesData.value];
        }

    }else if(isNaN(changedValue) || !(changedValue >= -2000 && changedValue <= 2000)){
        //reset the value back to original
        event.target.innerText = timeSeriesData.value[index][key];
        modal.value.open();
        
    }
}

//show and hide the specific timeSeries
function handleCheck(event,timeSerieName) {
    const checked = event.target.checked;
    if (!checked) {
        //hide the selected timeserie
        timeSeriesData.value = timeSeriesData.value.map((obj) => {
            const newObj = { ...obj };
            delete newObj[timeSerieName]; //remove the selected timeserie
            return newObj;
        });
    } else {
        //restore the removed time series (Reload the Original Data)
        timeSeriesData.value = timeSeriesData.value.map((obj) => {
            const originalObj = { ...obj };
            originalObj[timeSerieName] = props.timeSeriesData.find(item => item.DateTime === originalObj.DateTime)[timeSerieName];
            return originalObj;
        });
    }
}

const filteredData = computed(() => {//returns an array with the filtered data when one of the refs values inside change
    if (!minDate.value || !maxDate.value) {
        return timeSeriesData.value;
    }
    
    return timeSeriesData.value.filter((obj) => {//returns a filtered array with the data based on the date range
                const objDate = new Date(obj.DateTime);
                return objDate >= minDate.value && objDate <= maxDate.value;//returrns data between minDate and maxDate
            }); 

});

</script>

<!-- !wrapper component!/ !pass the updated array to all the components who need it! -->
<template>
    <div class="bg-stone-100 rounded-2xl shadow-lg p-5 mx-auto w-11/12 my-16 md:my-32 md:p-10">
        <Filters :timeSeries="[...props.timeSeriesData]" :onHandleFilter="handleDateFilter" :onHandleCheck="handleCheck"/>
        <Table :passedData="filteredData" :handleUpdate="handleDataUpdate"/>
        <Chart :key="filteredData" :passedData="filteredData"/>
        <Modal ref="modal"/>
    </div>
</template>