<script setup>
import Header from './components/Header.vue'
import Dashboard from './components/Dashboard.vue'

import DATA from './timeseries.json'
</script>

<template>
  
  <Header/>
  <Dashboard :timeSeriesData="DATA"/>
    
</template>

<style scoped>

</style>
