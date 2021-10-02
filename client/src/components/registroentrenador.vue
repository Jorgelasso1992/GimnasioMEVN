<template>
  <v-app>
    <div class="container profile profile-view" id="profile">
      <div class="row">
        <div class="col-md-12 alert-col relative">
          <div
            class="alert alert-info alert-dismissible absolue center"
            role="alert"
          >
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button
            ><span>Perfil guardado correctamente</span>
          </div>
        </div>
      </div>
      <form>
        <div class="row profile-row">
          <div class="col-lg-4 offset-lg-0">
            <div class="avatar">
              <div class="avatar-bg center"></div>
            </div>
            <input
              type="file"
              class="form-control form-control"
              name="avatar-file"
            />
            <div>
              <label class="form-label"
                ><h2 class="text-align: center mt-5">
                  Habilidades y conocimientos
                </h2></label
              >
              <div
                class="align: center mt-3 pb-5 selectgroup selectgroup-pills"
              >
                <label class="m-1 selectgroup-item"
                  ><input
                    type="checkbox"
                    name="value"
                    value="TRX"
                    class="selectgroup-input"
                    checked
                  /><span class="selectgroup-button">TRX</span></label
                ><label class="m-1 selectgroup-item"
                  ><input
                    type="checkbox"
                    name="value"
                    value="CROSSFIT"
                    class="selectgroup-input"
                  /><span class="selectgroup-button">CROSSFIT</span></label
                ><label class="m-1 selectgroup-item"
                  ><input
                    type="checkbox"
                    name="value"
                    value="PILATES"
                    class="selectgroup-input"
                  /><span class="selectgroup-button">PILATES</span></label
                ><label class="m-1 selectgroup-item"
                  ><input
                    type="checkbox"
                    name="value"
                    value="AEROBICOS"
                    class="selectgroup-input"
                  /><span class="selectgroup-button">AEROBICOS</span></label
                ><label class="m-1 selectgroup-item"
                  ><input
                    type="checkbox"
                    name="value"
                    value="CARDIO"
                    class="selectgroup-input"
                  /><span class="selectgroup-button">CARDIO</span></label
                ><label class="m-1 selectgroup-item"
                  ><input
                    type="checkbox"
                    name="value"
                    value="FUNCIONALCROSS"
                    class="selectgroup-input"
                  /><span class="selectgroup-button"
                    >FUNCIONAL CROSS</span
                  ></label
                ><label class="m-1 selectgroup-item"
                  ><input
                    type="checkbox"
                    name="value"
                    value="FITCOMBAT"
                    class="selectgroup-input"
                  /><span class="selectgroup-button">FIT COMBAT</span></label
                ><label class="m-1 selectgroup-item"
                  ><input
                    type="checkbox"
                    name="value"
                    value="CROSSTECH"
                    class="selectgroup-input"
                  /><span class="selectgroup-button">CROSSTECH</span></label
                ><label class="m-1 selectgroup-item"
                  ><input
                    type="checkbox"
                    name="value"
                    value="BODYPUMP"
                    class="selectgroup-input"
                  /><span class="selectgroup-button">BODYPUMP</span></label
                ><label class="m-1 selectgroup-item"
                  ><input
                    type="checkbox"
                    name="value"
                    value="TAEKWONDO"
                    class="selectgroup-input"
                  /><span class="selectgroup-button">TAEKWONDO</span></label
                ><label class="m-1 selectgroup-item"
                  ><input
                    type="checkbox"
                    name="value"
                    value="BOXING"
                    class="selectgroup-input"
                  /><span class="selectgroup-button">BOXING</span></label
                >
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <h1>Registro de entrenador</h1>
            <hr />
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <div class="form-group mb-3">
                  <label class="form-label">Nombres</label
                  ><input class="form-control" type="text" name="nombres" />
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="form-group mb-3">
                  <label class="form-label">Apellidos</label
                  ><input class="form-control" type="text" name="apellidos" />
                </div>
              </div>
            </div>
            <div class="form-group mb-3">
              <label class="form-label">Email </label
              ><input
                class="form-control"
                type="email"
                autocomplete="off"
                required=""
                name="email"
              />
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <div class="form-group mb-3">
                  <label class="form-label">Contraseña</label
                  ><input
                    class="form-control"
                    type="password"
                    name="password"
                    autocomplete="off"
                    required=""
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="form-group mb-3">
                  <label class="form-label">Confirmar contraseña</label
                  ><input
                    class="form-control"
                    type="password"
                    name="confirmpass"
                    autocomplete="off"
                    required=""
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="form-group mb-3">
                  <label class="form-label">Documento de identidad</label
                  ><input class="form-control" type="text" name="id" />
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="form-group mb-3">
                  <label class="form-label">Teléfono</label
                  ><input class="form-control" type="text" name="tel" />
                </div>
              </div>
            </div>
            <hr />
            <button class="btn btn-primary form-btn" type="submit">
              GUARDAR</button
            ><button class="btn btn-danger form-btn" type="reset">
              CANCELAR
            </button>
          </div>
        </div>
      </form>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "registroentrenador",
  data: () => ({}),
  methods: {},
  created() {},
};
</script>

<style>
@import '../assets/bootstrap/css/bootstrap.min.css';
@import '../assets/css/Multiple-Input-Select-Pills.css';
@import '../assets/css/Profile-Edit-Form-1.css';
@import '../assets/css/Profile-Edit-Form.css';
@import '../assets/css/styles.css';
</style>
