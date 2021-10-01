<template>
  <div class="container">
    <div class="card h-100">
      <div class="card-body">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h6 class="mb-2 text-secondary">Detalles de usuario</h6>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <label for="nameUser">Nombres</label>
              <input type="text" class="form-control" id="nameUser" placeholder="Nombre">
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <label for="lastName">Apellidos</label>
              <input type="text" class="form-control" id="lastName" placeholder="Apellido">
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <label for="idUser">Documento de identidad</label>
              <input type="text" class="form-control" id="idUser" placeholder="Cédula de ciudadanía">
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <label for="dateUser">Fecha de nacimiento</label>
              <input type="text" class="form-control" id="dateUser" placeholder="Fecha de nacimiento">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h6 class="mt-3 mb-2 text-secondary">Datos de contacto</h6>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <label for="eMail">Dirección de correo</label>
              <input type="email" class="form-control" id="eMail" placeholder="Email">
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <label for="phone">Teléfono</label>
              <input type="text" class="form-control" id="phone" placeholder="Teléfono móvil">
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <label for="state">Departamento</label>
              <input type="name" class="form-control" id="state" placeholder="Departamento">
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <label for="city">Ciudad</label>
              <input type="name" class="form-control" id="city" placeholder="Ciudad">
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="form-group">
              <label for="address">Dirección de vivienda</label>
              <input type="name" class="form-control" id="address" placeholder="Dirección">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="text-right">
              <button type="button" id="submit" name="submit" class="btn btn-secondary mt-3">Cancelar</button>
              <button type="button" id="submit" name="submit" class="btn btn-primary mt-3">Actualizar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EdicionPerfil",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/styleEdicionPerfil.css";
</style>
