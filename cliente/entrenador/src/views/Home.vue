<template>
  <div class="home">
    <h1 v-if="!editar">Lista de entrenadores</h1>
    <table class="table table-striped table-active" v-if="!editar">
      <thead>
        <tr>
          <th scope="col">Documento Identidad</th>
          <th scope="col">Nombres</th>
          <th scope="col">Apellidos</th>
          <th scope="col">Email</th>
          <th scope="col">Teléfono</th>
          <th scope="col">Editar/Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in entrenadores" :key="index">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.nombres }}</td>
          <td>{{ item.apellidos }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.tel }}</td>
          <td>
            <button
              @click="activarEdicion(item._id)"
              class="btn btn-primary form-btn"
              type="button"
            >
              EDITAR
            </button>
            <button
              @click="eliminarEntrenador(item._id)"
              class="btn btn-danger form-btn"
              type="button"
            >
              ELIMINAR
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <form @submit.prevent="editarEntrenadores(editarEntrenador)" v-if="editar">
      <h1>Editar entrenador</h1>
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
            <div class="align: center mt-3 pb-5 selectgroup selectgroup-pills">
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
                /><span class="selectgroup-button">FUNCIONAL CROSS</span></label
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
                  v-model="editarEntrenador.nombres"
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
                  v-model="editarEntrenador.apellidos"
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
              v-model="editarEntrenador.email"
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
                  v-model="editarEntrenador.password"
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
                  v-model="editarEntrenador.confirmpass"
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
                  v-model="editarEntrenador.id"
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
                  v-model="editarEntrenador.tel"
                />
              </div>
            </div>
          </div>
          <hr />
          <button class="btn btn-primary form-btn" type="submit">EDITAR</button
          ><button
            class="btn btn-danger form-btn"
            type="reset"
            @click="volveraHome()"
          >
            CANCELAR
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      entrenadores: [],
      editar: false,
      editarEntrenador: {},
    };
  },

  created() {
    this.mostrarEntrenadores();
  },

  methods: {
    mostrarEntrenadores() {
      this.axios
        .get("/entrenador")
        .then((res) => {
          this.entrenadores = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    activarEdicion(id) {
      this.editar = true;
      this.axios
        .get(`/entrenador/${id}`)
        .then((res) => {
          this.editarEntrenador = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    volveraHome() {
      this.editar = false;
    },

    editarEntrenadores(item) {
      this.axios
        .put(`/entrenador/${item._id}`, item)
        .then((res) => {
          const index = this.entrenadores.findIndex(
            (item) => item._id === res.data._id
          );
          this.entrenadores[index].nombres=res.data.nombres;
          this.entrenadores[index].apellidos=res.data.apellidos;
          this.entrenadores[index].email=res.data.email;
          this.entrenadores[index].password=res.data.password;
          this.entrenadores[index].confirmpass=res.data.confirmpass;
          this.entrenadores[index].id=res.data.id;
          this.entrenadores[index].tel=res.data.tel;
          this.editar=false;
          
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    eliminarEntrenador(id) {
      this.axios
        .delete(`/entrenador/${id}`)
        .then((res) => {
          const index = this.entrenadores.findIndex(
            (item) => item._id === res.data._id
          );
          this.entrenadores.splice(index, 1);
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
  },
};
</script>
