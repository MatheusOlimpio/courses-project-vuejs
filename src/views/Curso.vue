<template>
  <div>
    <PageLoading v-if="loading" />
    <transition name="page">
      <div v-if="api">
        <router-link class="btn-voltar" tag="button" to="/cursos"
          >Voltar</router-link
        >
        <h1>{{ api.nome }}</h1>
        <div>
          <p>
            <b>Aulas:</b> {{ api.totalAulas }} | <b>Horas:</b> {{ api.horas }}
          </p>
          <p>{{ api.descricao }}</p>
        </div>
        <ul>
          <h2>Aulas</h2>
          <li v-for="aula in api.aulas" :key="aula.id">
            <p>{{ aula.nome }}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "curso",
  props: ["curso"],
  mixins: [fetchData],
  created() {
    this.fetchData(`/curso/${this.curso}`);
  },
};
</script>

<style scoped>
.btn-voltar {
  background: #e9c46a;
  border: none;
  padding: 15px 40px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>