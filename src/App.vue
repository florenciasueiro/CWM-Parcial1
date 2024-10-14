<template>
  <div id="app">
    <router-view v-if="currentUser" :user="currentUser" />
  </div>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";  // Importa la función para detectar el usuario
import { auth } from '../firebase';  // Importa el objeto 'auth' de Firebase
import CreatePost from '../src/views/CreatePost';  // Importa el componente CreatePost

export default {
  components: { CreatePost },
  data() {
    return {
      currentUser: null  // Aquí almacenaremos el usuario autenticado
    };
  },
  created() {
    // Escucha los cambios en la autenticación (cuando el usuario inicia/cierra sesión)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Si el usuario está autenticado, guarda la información del usuario
        this.currentUser = user;
      } else {
        // Si no está autenticado, asigna 'null'
        this.currentUser = null;
      }
    });
  }
};
</script>