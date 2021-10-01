<template>
  <div class="container">
    <div class="card h-100">
      <div class="card-body">
        <div class="account-settings">
          <div class="user-profile">
            <div class="user-image">
              <img alt="Imagen usuario" class="avatar" src="../assets/avatar_profile.png"/>
            </div>
            <h5 class="user-name">Juan Montilla</h5>
            <h6 class="user-email">camilojkmo18@gmail.com</h6>
          </div>
          <div class="user-about">
            <h5>Sobre mí</h5>
            <p>Yo soy Juan Montilla. Entrenador de gimnasio.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformacionPerfil",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/styleInformacionPerfil.css";
</style>
