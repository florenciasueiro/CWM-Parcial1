<template>
  <div class="home">
    <!-- Bienvenida (solo si el usuario no está autenticado) -->
    <section v-if="!user">
      <h1>Bienvenido a Finstagram</h1>
      <p>¡Conéctate con tus amigos, comparte tus pensamientos y mucho más!</p>
      
      <!-- Formularios de Iniciar Sesión y Registrarse -->
      <div class="auth-forms">
        <!-- Formulario de Iniciar Sesión -->
        <div class="login-form">
          <h2>Iniciar Sesión</h2>
          <form @submit.prevent="loginUser">
            <input v-model="loginEmail" type="email" placeholder="Correo Electrónico" required />
            <input v-model="loginPassword" type="password" placeholder="Contraseña" required />
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
        
        <!-- Formulario de Registrarse -->
        <div class="register-form">
          <h2>Registrarse</h2>
          <form @submit.prevent="registerUser">
            <input v-model="registerUsername" type="text" placeholder="Nombre de Usuario" required />
            <input v-model="registerEmail" type="email" placeholder="Correo Electrónico" required />
            <input v-model="registerPassword" type="password" placeholder="Contraseña" required />
            <button type="submit">Registrarse</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Feed de publicaciones (solo si el usuario está autenticado) -->
    <section v-if="user">
      <h2>Últimas Publicaciones</h2>
      <router-link to="/create">Crear nueva publicación</router-link>

      <div v-if="posts.length === 0">
        <p>No hay publicaciones aún. ¡Sé el primero en publicar!</p>
      </div>

      <div v-else>
        <article v-for="post in posts" :key="post.id" class="post">
          <header>
            <h3>{{ post.title }}</h3>
            <p>Publicado por: {{ post.author }}</p>
          </header>
          <section>
            <p>{{ post.content }}</p>
          </section>
          <footer>
            <router-link :to="'/posts/' + post.id">Leer más</router-link>
          </footer>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import { db, auth } from '../../firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

export default {
  data() {
    return {
      user: null,                // Estado para manejar al usuario autenticado
      posts: [],                 // Lista de publicaciones
      loginEmail: '',            // Campo de correo electrónico para login
      loginPassword: '',         // Campo de contraseña para login
      registerUsername: '',      // Campo de nombre de usuario para registro
      registerEmail: '',         // Campo de correo electrónico para registro
      registerPassword: ''       // Campo de contraseña para registro
    };
  },
  created() {
    // Verifica si el usuario está autenticado
    auth.onAuthStateChanged(user => {
      this.user = user;
      if (this.user) {
        this.loadPosts();
      }
    });
  },
  methods: {
    // Función para iniciar sesión
    loginUser() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.loginEmail, this.loginPassword)
        .then((userCredential) => {
          alert("Inicio de sesión exitoso");
        })
        .catch((error) => {
          console.error("Error al iniciar sesión: ", error.message);
        });
    },

    // Función para registrar un nuevo usuario
    registerUser() {
      const auth = getAuth();
      const db = getFirestore();

      createUserWithEmailAndPassword(auth, this.registerEmail, this.registerPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          
          // Guardar el nombre de usuario en Firestore
          setDoc(doc(collection(db, "users"), userid1), {
            username: this.registerUsername,
            email: this.registerEmail,
            createdAt: new Date()
          });

          alert("Registro exitoso");
        })
        .catch((error) => {
          console.error("Error al registrarse: ", error.message);
        });
    },

    // Cargar las publicaciones de Firestore si hay un usuario autenticado
    loadPosts() {
      const db = getFirestore();
      collection(db, 'posts').orderBy('date', 'desc').onSnapshot(snapshot => {
        this.posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      });
    }
  }
};
</script>

<style scoped>
/* Agrega estilos para los formularios aquí */
.auth-forms {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.login-form, .register-form {
  width: 100%;
}

input {
  display: block;
  margin: 0.5rem 0;
  padding: 0.5rem;
  width: 100%;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
