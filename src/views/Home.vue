<template>
  <div>
    <PageLoading v-if="loading" />
    <transition name="page">
      <div v-if="api" class="conteudo">
        <div>
          <h1>Sobre a {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <router-link class="btn-cursos" tag="button" to="/cursos"
            >Cursos</router-link
          >

          <div class="avaliacoes">
            <h1>Avaliacoes de nossos alunos</h1>
            <div class="avaliacoes-main">
              <div
                class="avaliacao"
                v-for="(avaliacao, index) in api.avaliacoes"
                :key="index"
              >
                <p class="avaliacao-nome">{{ avaliacao.nome }}</p>
                <p class="avaliacao-descricao">{{ avaliacao.descricao }}</p>
              </div>
            </div>
          </div>
        </div>
        <img src="@/assets/background-home.svg" alt="Aprenda Web Design" />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "home",
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  },
};
</script>

<style scoped>
.btn-cursos {
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

.avaliacoes {
  width: 100%;
}

.avaliacoes-main {
  display: grid;
  width: 100%;
}

.avaliacao {
  box-shadow: 4px 4px 20px rgba(1, 1, 1, 0.1);
  /* max-width: 300px; */
  margin: 10px 0;
  padding: 20px;
  clear: both;
}

.avaliacao-nome {
  font-weight: bold;
}

.avaliacao-descricao {
  font-size: 0.9rem;
  font-style: italic;
}


</style>