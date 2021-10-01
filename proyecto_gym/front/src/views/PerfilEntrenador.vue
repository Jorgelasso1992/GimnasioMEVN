<template>
  <div class="container">
    <!--
	<img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
	-->
	<div class="mb-3"><BarraNavegacion /></div>
	<div class="row">
		<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
			<InformacionPerfil />
		</div>
		<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
			<EdicionPerfil />
		</div>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import InformacionPerfil from "@/components/InformacionPerfil.vue";
import EdicionPerfil from "@/components/EdicionPerfil.vue";
import BarraNavegacion from "@/components/BarraNavegacion.vue";

export default {
  name: "PerfilEntrenador",
  components: {
	InformacionPerfil,
	EdicionPerfil,
	BarraNavegacion,
  },
};
</script>

<style scoped>
body {
    margin: 0;
    position: relative;
    height: 100%;
}
.container{
	max-width: 100%;
	padding: 0;
}
@import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>