<template>
  <div class="container">
    <h1>GIMNASIO MEVN</h1>

    <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                        {{notas[2].Nombre.toUpperCase()}}<br><br><br>
                                    </h5>
                                    <h6>
                                        {{notas[2].Membresia.toUpperCase()}}<br><br><br>
                                    </h6>
                                    
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Informacion Personal</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        
                    </div>
                </div>
                <div class="row">
                     <div class="col-md-4">
                        
                    </div> 
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Nombre:</label>
                                            </div>
                                            <div class="col-md-6">
                                               <p>{{notas[2].Nombre}}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Genero:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{{notas[2].Genero}}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Correo:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{{notas[2].Correo}}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Celular</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{{notas[2].Celular}}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Peso(kg):</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{{notas[2].Peso}}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Altura(m):</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{{notas[2].Altura}}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>IMC:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{{((parseFloat(notas[2].Peso))/(parseFloat(notas[2].Altura)*parseFloat(notas[2].Altura))).toFixed(2)}}</p>
                                            </div>
                                        </div>
                            </div>

                            <b-button class="btn-warning my-4" @click='activarEdicion(notas[2]._id)'>Editar</b-button>

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
              
            })
            .catch(e=>{
              console.log(e.response);
            })
          },

        }
    }
</script>