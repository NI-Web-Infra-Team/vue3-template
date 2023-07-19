<template>
  <div class="home">
    <h1>Home</h1>
    <TitleMain></TitleMain>
    <h3>count: {{ count }}</h3>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import TitleMain from '@/components/TitleMain.vue'
import useCounter from '@/store/counter'

const counterStore = useCounter()
const { count } = storeToRefs(counterStore)

/**
 *
 */
function incrementCount() {
  counterStore.count++
}

setInterval(incrementCount, 1000)
</script>
<style>
.home {
  text-align: center;
}
</style>
