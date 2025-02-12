<script setup>
import { defineProps } from 'vue';
import { provide } from 'vue';

import DateFilter from './DateFilter.vue';
import ToggleTimeseries from './ToggleTimeseries.vue';

const props = defineProps({
    timeSeries: Array,
    onHandleFilter: Function,
    onHandleCheck: Function
})
//pass the props to the children components with the Provide/Inject API to avoid prop drilling
provide('timeSeries', props.timeSeries);
provide('onHandleFilter', props.onHandleFilter);
provide('onHandleCheck', props.onHandleCheck);

</script>

<template>
    <div class="flex flex-col lg:flex-row md:justify-end">
        <ToggleTimeseries class="order-2 lg:order-1"/>
        <DateFilter class="order-1 lg:order-2"/>
    </div>
</template>