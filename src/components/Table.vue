<script setup>
import { ref } from 'vue';
import dateFormatter from '../dateFormatter.js';
import Modal from './Modal.vue';

//pass the json data as a prop
const props = defineProps({
  passedData: Array,
  handleUpdate: Function,
  onHandleCheck: Function,
  hiddenRows: Set // Receive hidden rows as a prop
})

const checked = ref();

</script>


<template>
  <div class="tableContainer mx-5 h-[350px] overflow-y-auto z-0 border-t-4 border-indigo-600 shadow-lg md:mx-10"> <!-- container to wrap the table and have the scroll effect -->
    <table class=" text-xs w-full p-5 md:p-10 md:text-base">
      <thead class="bg-stone-100 sticky top-0">
        <tr>
          <!-- loop through the array item Object Keys-->
          <th v-for="key in Object.keys(passedData[0])"> <!-- dynamic <th/> rendering from data -->
            {{key}}
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- loop through the array data-->
        <tr v-for="(data, index) in passedData" ><!-- dynamic render each value from the data in a row <tr/> -->
          <td v-if="data.DateTime" >
              {{ dateFormatter(data.DateTime) }}
          </td>
          <td v-if="data.ENTSOE_DE_DAM_Price" 
              contenteditable="true" @input="(event) => { handleUpdate(index,'ENTSOE_DE_DAM_Price',event )}" >
              {{data.ENTSOE_DE_DAM_Price}}
          </td>
          <td v-if="data.ENTSOE_GR_DAM_Price" 
              contenteditable="true" @input="(event) => { handleUpdate(index,'ENTSOE_GR_DAM_Price',event )}" >
              {{data.ENTSOE_GR_DAM_Price}}
          </td>
          <td v-if="data.ENTSOE_FR_DAM_Price" 
              contenteditable="true" @input="(event) => { handleUpdate(index,'ENTSOE_FR_DAM_Price',event )}" >
              {{data.ENTSOE_FR_DAM_Price}}
          </td>
          <!-- rendered all the </td> conditionally based on their value existance in the passedData (the hide and show feature is the reason)-->
          <!-- added the input event at the editable </td> to call the Update Function -->
        </tr>
      </tbody>
    </table>
  </div>

</template>


<style scoped>
/* styling and responsive for the table (better here in this case, cleaner option than tailwind) */
td, th{
  text-align: center;
  padding: 10px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

@media screen and (min-width: 768px) {
  td, th{
    padding: 20px;
  }
}
</style>
