<template>
  <div>
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="loginUser">
      <input v-model="email" type="email" placeholder="Correo Electrónico" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Iniciar Sesión</button>
    </form>
  </div>
</template>

<script>
import { auth } from '../firebase';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    loginUser() {
      auth.signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Inicio de sesión exitoso");
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  }
};
</script>
