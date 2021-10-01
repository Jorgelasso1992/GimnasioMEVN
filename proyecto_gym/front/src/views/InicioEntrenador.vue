<template>
  <div class="container p-0">
    <div class="mb-0"><BarraNavegacion /></div>
    <main><MenuLateral />
      <div class="text-center text-black bg-white">
        <p class="welcome-message m-3">Bienvenido a GIMNASIO, una plataforma para gestionar los entrenamientos</p>
        <div class="imagen">
          <img class="img-fluid" src="../assets/exercise_weights.jpg" alt="pesas" width="70%">
          <!--<a href='https://www.freepik.es/fotos/deporte'>Foto de Deporte creado por snowing - www.freepik.es</a>-->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import BarraNavegacion from "@/components/BarraNavegacion.vue";
import MenuLateral from "@/components/MenuLateral.vue";


export default {
  name: "InicioEntrenador",
  components: {
    BarraNavegacion,
    MenuLateral,
  },
};
</script>

<style scoped>
body {
    margin: 0;
    height: 100vh;
}
.container{
	max-width: 100%;
}
.welcome-message{
	font-weight:bold;
}
</style>