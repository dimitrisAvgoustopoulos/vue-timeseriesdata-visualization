<script setup>
import { inject, ref} from 'vue';

const timeSeries = inject('timeSeries');
const onHandleCheck = inject('onHandleCheck');

</script>

<template>
    <div class="timeseriesFilter flex justify-center xl:justify-end"> 
        <div class="flex flex-col gap-4 border-b-4 border-blueStellar w-fit text-xs mb-5 lg:flex-row lg:text-base lg:mx-10 lg:mb-10 lg:gap-2 lg:m-5">
            <!-- loop through the array item Object Keys and render dynamicaly the input and labels-->
            <div v-for="key in Object.keys(timeSeries[0]).filter((_, index) => index !== 0)" class="flex items-center">
                <input type="checkbox" :id="key" class="m-1 md:m-2" @change="(event)=>{onHandleCheck(event,key)}" checked/>
                <label class="m-1 md:m-2" :for="key">{{key}}</label>
            </div>
        </div>
    </div>
</template>
