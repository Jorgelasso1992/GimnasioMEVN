<template>
  <div class="home">
    <h1>Lista de entrenadores</h1>
    <table class="table table-striped table-active">
      <thead>
        <tr>
          <th scope="col">Documento Identidad</th>
          <th scope="col">Nombres</th>
          <th scope="col">Apellidos</th>
          <th scope="col">Email</th>
          <th scope="col">Teléfono</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in entrenadores" :key="index">
          <th scope="row">{{item.id}}</th>
          <td>{{item.nombres}}</td>
          <td>{{item.apellidos}}</td>
          <td>{{item.email}}</td>
          <td>{{item.tel}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      entrenadores: [],
    };
  },

  created() {
    this.mostrarEntrenadores();
  },

  methods: {
    mostrarEntrenadores() {
      this.axios
        .get("/entrenador")
        .then((res) => {
          this.entrenadores = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
  },
};
</script>
