<template>
  <div>
    <h2>Registrarse</h2>
    <form @submit.prevent="registerUser">
      <input v-model="email" type="email" placeholder="Correo Electrónico" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <input v-model="confirmPassword" type="password" placeholder="Confirmar Contraseña" required />
      <button type="submit">Registrarse</button>
    </form>
  </div>
</template>

<script>
import { auth } from '../../firebase';

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    registerUser() {
      if (this.password !== this.confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
      }

      auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Registro exitoso");
          this.$router.push('/login'); // Redirige al login tras el registro
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  }
};
</script>
