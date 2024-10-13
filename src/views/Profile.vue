<template>
  <aside class="profile">
    <div class="user-info">
      <img :src="user.photoURL || defaultProfilePic" alt="Foto de perfil" class="profile-pic">
      <h2>{{ user.displayName || 'Usuario' }}</h2>
      <p>{{ user.email }}</p>
      <button @click="logoutUser">Cerrar Sesión</button>
    </div>
  </aside>
</template>

<script>
import { signOut } from "firebase/auth";
import { auth } from '../../firebase';  // Asegúrate de tener Firebase configurado

export default {
  props: ['user'],  // Recibe el objeto user desde el componente padre (Home.vue)
  data() {
    return {
      defaultProfilePic: 'https://via.placeholder.com/150'  // Imagen de perfil por defecto
    };
  },
  methods: {
    logoutUser() {
      signOut(auth).then(() => {
        this.$emit('logout');  // Emitimos un evento para informar al componente padre
      }).catch((error) => {
        console.error("Error al cerrar sesión: ", error.message);
      });
    }
  }
};
</script>

<style scoped>
.profile {
  background-color: #f0f0f0;
  padding: 20px;
}

.user-info {
  text-align: center;
}

.profile-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
}
</style>
