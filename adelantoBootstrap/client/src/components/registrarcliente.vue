
<template>
    <v-app>
        <section class="register-photo">
            <div class="form-container">
                <div class="image-holder"></div>
                <form method="post">
                    <h2 class="text-center"><strong>Crea</strong>&nbsp;una cuenta.</h2>
                    <div class="mb-3"><input class="form-control" type="email" name="names" placeholder="Nombres"></div>
                    <div class="mb-3"><input class="form-control" type="email" name="lastname" placeholder="Apellidos"></div>
                    <div class="mb-3"><input class="form-control" type="email" name="email" placeholder="Correo"></div>
                    <div class="mb-3"><input class="form-control" type="password" name="password" placeholder="Contraseña"></div>
                    <div class="mb-3"><input class="form-control" type="password" name="password-repeat" placeholder="Contraseña(repetir)"></div>
                    <div class="mb-3">
                        <div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox">Acepto los términos y condiciones&nbsp;</label></div>
                    </div>
                    <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Ingresar</button></div><a class="already" href="#">Ya tienes una cuenta registrada? Ingresa aquí.</a>
                </form>
            </div>
        </section>
    </v-app>   
</template>
<script>
export default {
    name:"registrarcliente"
};
</script>
<style>
@import '../assets/bootstrap/css/bootstrap.min.css';
@import '../assets/css/Login-Form-Clean.css';
@import '../assets/css/Registration-Form-with-Photo.css';
@import '../assets/css/styles.css';
</style>