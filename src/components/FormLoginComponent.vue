<template>
  <div>
    <form @submit.prevent="registerUser">
      <input v-model="email" type="email" placeholder="Correo Electrónico" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Registrarse</button>
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
    registerUser() {
      auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(userCredential => {
          // El usuario fue registrado
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  }
};
</script>
