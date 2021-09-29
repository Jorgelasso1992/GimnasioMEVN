<template>
  <div>
    <registrarcliente></registrarcliente>
  </div>
</template>

<script>
import registrarcliente from './components/registrarcliente.vue';
export default{
  components: {registrarcliente},
  name:"App"
}

</script>
<style>
@import '../assets/bootstrap/css/bootstrap.min.css';
@import '../assets/css/Login-Form-Clean.css';
@import '../assets/css/Registratin-Form-with-Photo.css';
@import '../assets/css/styles.css';
</style>