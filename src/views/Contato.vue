<template>
  <div>
    <PageLoading v-if="loading"/>
    <transition name="page">
      <div v-if="api">
        <h1>Contato</h1>
        {{ this.api }}
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "contato",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  },
};
</script>

<style>
</style>