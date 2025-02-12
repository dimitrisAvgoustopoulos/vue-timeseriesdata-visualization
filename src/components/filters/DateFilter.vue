<script setup>
import { ref, onMounted, watch} from "vue";
import { inject } from 'vue';
//import flatpickr from "flatpickr";
//import "flatpickr/dist/flatpickr.min.css";
import DateInput from "./DateInput.vue";

const onHandleFilter = inject('onHandleFilter');

const startDate=ref('');
const endDate=ref('');

//Filter when BUTTON clicked
function getDateRange(){
    onHandleFilter(startDate.value,endDate.value);
}

//Filter when Dates Change, NO BUTTON
// watch([startDate,endDate],([newStartDate,newEndDate])=>{
//    props.handleFilter(newStartDate, newEndDate);
// })

// 1st Way
//const datePickerRef=ref();
//onMounted(()=>{//execute when component has been rendered
//     flatpickr(datePickerRef.value, { //imported a usefull DatePicker JS Library
//         mode: "range",
//         dateFormat: "d-m-Y",
//         onClose: function(selectedDates) {
//             props.handleFilter(selectedDates[0],selectedDates[1])
//             //console.log(selectedDates[0],selectedDates[1])
//         },
//     });
// })

</script>

<template>
    <div class="dateFilter flex flex-wrap justify-end"> 
        <div class="flex gap-4 border-b-4 border-blueStellar w-fit text-xs p-2 mb-5 lg:text-base lg:mx-10 lg:mb-10 lg:gap-2 lg:m-5">
            <DateInput v-model="startDate" labelName="Start Date:"/>
            <DateInput v-model="endDate" labelName="End Date:"/>
            <button class="text-white bg-blueStellar px-2 rounded-sm" @click="()=>getDateRange()">
                Apply Filter
            </button>
        </div>
    </div>
</template>