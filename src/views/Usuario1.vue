<template>
  <div class="container">
    <h1>GIMNASIO MEVN</h1>
    <!--<b-alert
      :show="dismissCountDown"
      dismissible
      :variant="mensaje.color"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      {{mensaje.texto}}
    </b-alert>  

    <form @submit.prevent="editarNota(notaEditar)" v-if="editar">
      <h3>Editar nota</h3>
      <input type="text" class="form-control my-2" placeholder="Nombre" v-model="notaEditar.nombre">
      <input type="text" class="form-control my-2" placeholder="Descripcion" v-model="notaEditar.descripcion">
      <b-button class="btn-success my-2 mx-2" type="submit">Editar</b-button>
      <b-button class=" my-2" type="submit" @click="editar=false">Cancelar</b-button>
    </form>

    <form @submit.prevent="agregarNota()" v-if="!editar">
      <h3>Agregar una nueva nota</h3>
      <input type="text" class="form-control my-2" placeholder="Nombre" v-model="nota.nombre">
      <input type="text" class="form-control my-2" placeholder="Descripcion" v-model="nota.descripcion">
      <b-button class="btn-success my-2" type="submit">Agregar</b-button>
    </form>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nota</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in notas" :key="index">
              
          <th scope="row">{{item._id}}</th>
          <td>{{item.nombre}}</td>
          <td>{{item.descripcion}}</td>
          <td>
            <b-button class="btn-danger mx-2" @click='eliminarNota(item._id)'>Eliminar</b-button>
            <b-button class="btn-warning mx-2" @click='activarEdicion(item._id)'>Editar</b-button>
          </td>
        </tr>
      </tbody>
    </table>-->

    <!--/////////////////////////////////////////////////////////////////-->
    <!--/////////////////////////////////////////////////////////////////-->

    <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                        {{notas[0].Nombre.toUpperCase()}}<br><br><br>
                                    </h5>
                                    <h6>
                                        {{notas[0].Membresia.toUpperCase()}}<br><br><br>
                                    </h6>
                                    <!--<p class="proile-rating">RANKINGS : <span>8/10</span></p>-->
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Informacion Personal</a>
                                </li>
                                <!--<li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>-->
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                       <!--  <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Editar"/> -->
                        
                    </div>
                </div>
                <div class="row">
                     <div class="col-md-4">
                        <!--<div class="profile-work">
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/>
                        </div>-->
                    </div> 
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Nombre:</label>
                                            </div>
                                            <div class="col-md-6">
                                               <p>{{notas[0].Nombre}}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Genero:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{{notas[0].Genero}}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Correo:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{{notas[0].Correo}}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Celular</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{{notas[0].Celular}}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Peso(kg):</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{{notas[0].Peso}}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Altura(m):</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{{notas[0].Altura}}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>IMC:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{{((parseFloat(notas[0].Peso))/(parseFloat(notas[0].Altura)*parseFloat(notas[0].Altura))).toFixed(2)}}</p>
                                            </div>
                                        </div>
                            </div>

                            <b-button class="btn-warning my-4" @click='activarEdicion(notas[0]._id)'>Editar</b-button>

                            <div class="col-md-8">
                            <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                            <form @submit.prevent="editarNota(notaEditar)" v-if="editar">
                              <h3 class="my-2">Editar nota</h3>
                              <div class="row">
                                            <div class="col-md-6">
                                                <label>Nombre:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p><input type="text" class="form-control my-1" placeholder="Nombre" v-model="notaEditar.Nombre"></p>
                                            </div>
                                        </div>
                              <div class="row">
                                            <div class="col-md-6">
                                                <label>Genero:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p><input type="text" class="form-control my-1" placeholder="Genero" v-model="notaEditar.Genero"></p>
                                            </div>
                                        </div>
                              <div class="row">
                                            <div class="col-md-6">
                                                <label>Correo:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p><input type="text" class="form-control my-1" placeholder="Nombre" v-model="notaEditar.Correo"></p>
                                            </div>
                                        </div>
                              <div class="row">
                                            <div class="col-md-6">
                                                <label>Celular:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p><input type="text" class="form-control my-1" placeholder="Genero" v-model="notaEditar.Celular"></p>
                                            </div>
                                        </div>
                              <div class="row">
                                            <div class="col-md-6">
                                                <label>Peso(kg):</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p><input type="text" class="form-control my-1" placeholder="Nombre" v-model="notaEditar.Peso"></p>
                                            </div>
                                        </div>
                              <div class="row">
                                            <div class="col-md-6">
                                                <label>Altura(m):</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p><input type="text" class="form-control my-1" placeholder="Genero" v-model="notaEditar.Altura"></p>
                                            </div>
                                        </div>
                              
                              <b-button class="btn-success my-2" type="submit">Editar</b-button>
                              <b-button class="mx-4 my-2" type="submit" @click="editar=false">Cancelar</b-button>
                            </form>

                            </div>
                            </div>
                            </div>

                            <!--<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>-->
                        </div>
                    </div>
                </div>
            </form>           
        </div>

    <!--/////////////////////////////////////////////////////////////////-->
    <!--/////////////////////////////////////////////////////////////////-->

  </div>
</template>

<script>
    export default{
        data() {
            return{
              notas:[],

              nota:{Nombre:"",Genero:"",Correo:"",Celular:"",Peso:"",Altura:"",Usuario:"",Contraseña:""},

              /*mensaje: {color: 'success', texto: ''},
              dismissSecs: 5,
              dismissCountDown: 0,*/

              editar:false,

              notaEditar:{}
            }
        },

        created(){
          this.listarNotas();
        },

        methods:{
          listarNotas(){
            this.axios.get('/nota')
            .then(res=>{
              this.notas=res.data;
            })
            .catch(e=>{
              console.log(e.response);
            })
          },

          agregarNota(){
            this.axios.post('/nueva-nota',this.nota)
            .then(res=>{
              this.nota.push(res.data)//------------------------------
              this.nota.Nombre="";
              this.nota.Genero="";
              /* this.mensaje.color="success";
              this.mensaje.texto="Nota Agregada";
              this.showAlert(); */
            })
            .catch(e=>{
              console.log(e.response);
            })
          },

          eliminarNota(id){
            this.axios.delete(`/nota/${id}`)
            .then(res=>{
              const index=this.notas.findIndex(item=>item._id===res.data._id);
              this.notas.splice(index,1);
              this.mensaje.color="success";
              this.mensaje.texto="Nota Eliminada";
              this.showAlert();
            })
            .catch(e=>{
              console.log(e.response);
            })
          },

          activarEdicion(id){
            this.editar=true;
            this.axios.get(`/nota/${id}`)
            .then(res=>{
              this.notaEditar=res.data;
            })
            .catch(e=>{
              console.log(e.response);
            })
          },

          editarNota(item){
            this.axios.put(`/nota/${item._id}`,item)
            .then(res=>{
              const index=this.notas.findIndex(n=>n._id===res.data._id);
              this.notas[index].Nombre=res.data.Nombre;
              this.notas[index].Genero=res.data.Genero;
              this.notas[index].Correo=res.data.Correo;
              this.notas[index].Celular=res.data.Celular;
              this.notas[index].Peso=res.data.Peso;
              this.notas[index].Altura=res.data.Altura;
              /* this.mensaje.color="success";
              this.mensaje.texto="Nota Editada";
              this.showAlert();
              this.editar=false; */
            })
            .catch(e=>{
              console.log(e.response);
            })
          },

          /*countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
          },
          showAlert() {
            this.dismissCountDown = this.dismissSecs
          }*/
        }
    }
</script>
