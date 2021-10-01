<template>
      <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;">
        <router-link class="d-flex align-items-left mb-3 mb-md-0 me-md-auto text-white text-decoration-none" to="/">
          <img src="../assets/logo_gym.jpg" alt="logo gimnasio" width="60" height="60" class="rounded-circle me-2">
          <span class="fs-4">Gimnasio MEVN</span>
        </router-link>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
			<router-link class="nav-link text-white" to="/perfil">
              <v-icon name="user" class="icon"></v-icon> Perfil
			</router-link>
          </li>
          <li>
            <router-link class="nav-link text-white" to="/">
              <v-icon name="users" class="icon"></v-icon> Usuarios
            </router-link>
          </li>
          <li>
            <router-link class="nav-link text-white" to="/">
              <v-icon name="dumbbell" class="icon"></v-icon> Ejercicios
			</router-link>
          </li>
          <li>
            <router-link class="nav-link text-white" to="/">
              <v-icon name="calendar" class="icon"></v-icon> Calendario
            </router-link>
          </li>
        </ul>
      </div>
</template>

<script>
export default {
  name: "MenuLateral",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/styleMenuLateral.css";
</style>