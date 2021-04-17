<template>
  <div>
    <PageLoading v-if="loading" />
    <transition name="page">
      <div v-if="api">
        <h1>Cursos</h1>
        <p>{{api.descricao}}</p>

        <div class="cursos">
          <div @click="carregarCurso(curso.id)" class="curso" v-for="curso in api.cursos" :key="curso.id">
            <div class="curso-image">
              <img :src="require(`@/assets/${curso.id}.png`)" alt="">
            </div>
            <div>
              <h2>{{curso.nome}}</h2>
              <div><b>Aulas: </b>{{curso.totalAulas}} | <b>Duracao: </b>{{curso.horas}} horas</div>
              <p>{{curso.descricao}}</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "cursos",
  mixins: [fetchData],
  methods: {
    carregarCurso(curso) {
      this.$router.push({name: 'curso', params: {curso: curso}});
      
    }
  },
  created() {
    this.fetchData("/cursos");
  },
};
</script>

<style scoped>
.curso {
  display: flex;
  align-items: center;
  box-shadow: 2px 4px 10px rgba(1, 1, 1, .1);
  margin: 10px 0;
  padding: 20px;
  cursor: pointer;
  transition: .3s;
  border-radius: 4px;
}

.curso:hover {
  box-shadow: 2px 2px 10px rgba(1, 1, 1, .1), 6px 6px 10px rgba(1, 1, 1, .1);
}

.curso-image {
  padding: 10px;
}
.curso-image img {
  max-width: 150px;
}
</style>