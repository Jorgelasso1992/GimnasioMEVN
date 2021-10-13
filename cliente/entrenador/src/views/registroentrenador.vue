<template>
  <v-app>
    <div class="container profile profile-view" id="profile">
      <form @submit.prevent="registrarEntrenador()">
        <h1>Registrar entrenador</h1>
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
            <hr />
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <div class="form-group mb-3">
                  <label class="form-label">Nombres</label
                  ><input
                    class="form-control"
                    type="text"
                    name="nombres"
                    v-model="entrenador.nombres"
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="form-group mb-3">
                  <label class="form-label">Apellidos</label
                  ><input
                    class="form-control"
                    type="text"
                    name="apellidos"
                    v-model="entrenador.apellidos"
                  />
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
                v-model="entrenador.email"
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
                    v-model="entrenador.password"
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
                    v-model="entrenador.confirmpass"
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="form-group mb-3">
                  <label class="form-label">Documento de identidad</label
                  ><input
                    class="form-control"
                    type="text"
                    name="id"
                    v-model="entrenador.id"
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="form-group mb-3">
                  <label class="form-label">Teléfono</label
                  ><input
                    class="form-control"
                    type="text"
                    name="tel"
                    v-model="entrenador.tel"
                  />
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
  data() {
    return {
      entrenador: {
        nombres: "",
        apellidos: "",
        email: "",
        password: "",
        confirmpass: "",
        id: "",
        tel: "",
      },
    };
  },
  methods: {
    registrarEntrenador() {
      this.axios
        .post("/nuevo-entrenador", this.entrenador)
        .then((res) => {
          this.entrenadores.push(res.data);
          this.entrenador.nombres="";
          this.entrenador.apellidos= "",
          this.entrenador.email= "",
          this.entrenador.password= "",
          this.entrenador.confirmpass= "",
          this.entrenador.id= "",
          this.entrenador.tel= ""
        })
        .catch((e) => {
          console.log(e.response);
        });

        this.$router.push('/') 
    },
  },
};
</script>

<style>
@import "../assets/bootstrap/css/bootstrap.min.css";
@import "../assets/css/Multiple-Input-Select-Pills.css";
@import "../assets/css/Profile-Edit-Form-1.css";
@import "../assets/css/Profile-Edit-Form.css";
@import "../assets/css/styles.css";
</style>
