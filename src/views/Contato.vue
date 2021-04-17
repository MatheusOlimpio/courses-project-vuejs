<template>
  <div>
    <PageLoading v-if="loading"/>
    <transition name="page">
      <div v-if="api">
        <h1>Contato</h1>
        <p>{{api.titulo}}</p>
        <p>{{api.descricao}}</p>
        <ul>
          <li>
            <b>Email:</b>
            {{api.contato.email}}
          </li>
          <li>
            <b>Telefone:</b> 
            {{api.contato.telefone}}
          </li>
          <li>
            <b>Endereco:</b> 
            {{api.contato.endereco}}
          </li>          
        </ul>
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