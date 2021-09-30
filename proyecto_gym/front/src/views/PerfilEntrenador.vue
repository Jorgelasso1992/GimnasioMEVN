<template>
  <div class="container">
    <!--
	<img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
	-->
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

export default {
  name: "PerfilEntrenador",
  components: {
	InformacionPerfil,
	EdicionPerfil,
  },
};
</script>

<style scoped>

</style>