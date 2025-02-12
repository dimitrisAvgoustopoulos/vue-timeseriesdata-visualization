<script setup>
import { defineModel } from 'vue';

defineProps({
    labelName:String,
})

const dateValue=defineModel();

</script>

<template>
    <div class="flex flex-col items-start md:flex-row">
        <label class="mb-2 sm:mb-0 sm:mr-2">{{labelName}}</label>
        <input class="bg-stone-200 text-center text-black rounded-sm placeholder:text-center"
            type="date"
            v-model="dateValue"
        >
    </div>
</template>