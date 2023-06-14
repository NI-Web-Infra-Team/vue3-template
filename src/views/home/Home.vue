<template>
  <div class="home">
    <h1>Home</h1>
    <Title></Title>
    <h3>count: {{ count }}</h3>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Title from "./../../components/Title.vue";

export default defineComponent({
  name: "Home",
  components: {
    Title,
  },
});
</script>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import useCounter from "@/store/counter";

const counterStore = useCounter();
const { count } = storeToRefs(counterStore);

function incrementCount() {
  counterStore.count++;
}

setInterval(incrementCount, 1000);
</script>
<style>
.home {
  text-align: center;
}
</style>
