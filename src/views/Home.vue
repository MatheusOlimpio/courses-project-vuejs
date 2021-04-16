<template>
  <div>
    <PageLoading v-if="loading"/>
    <div v-if="api">
      <h1>Home</h1>
      {{api.titulo}} - {{api.descricao}}
      {{api.avaliacoes}}
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "home",
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  }
}
</script>

<style>

</style>