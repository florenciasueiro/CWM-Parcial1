<template>

  <div class="backwrap gradient">
		<div class="back-shapes">
			<span class="floating circle" style="top:66.59856996935649%;left:13.020833333333334%;animation-delay:-0.9s;"></span>
			<span class="floating triangle" style="top:31.46067415730337%;left:33.59375%;animation-delay:-4.8s;"></span>
			<span class="floating cross" style="top:76.50663942798774%;left:38.020833333333336%;animation-delay:-4s;"></span>
			<span class="floating square" style="top:21.450459652706844%;left:14.0625%;animation-delay:-2.8s;"></span>
			<span class="floating square" style="top:58.12053115423902%;left:56.770833333333336%;animation-delay:-2.15s;"></span>
			<span class="floating square" style="top:8.682328907048008%;left:72.70833333333333%;animation-delay:-1.9s;"></span>
			<span class="floating cross" style="top:31.3585291113381%;left:58.541666666666664%;animation-delay:-0.65s;"></span>
			<span class="floating cross" style="top:69.96935648621042%;left:81.45833333333333%;animation-delay:-0.4s;"></span>
			<span class="floating circle" style="top:15.117466802860061%;left:32.34375%;animation-delay:-4.1s;"></span>
			<span class="floating circle" style="top:13.074565883554648%;left:45.989583333333336%;animation-delay:-3.65s;"></span>
			<span class="floating cross" style="top:55.87334014300306%;left:27.135416666666668%;animation-delay:-2.25s;"></span>
			<span class="floating cross" style="top:49.54034729315628%;left:53.75%;animation-delay:-2s;"></span>
			<span class="floating cross" style="top:34.62717058222676%;left:49.635416666666664%;animation-delay:-1.55s;"></span>
			<span class="floating cross" style="top:33.19713993871297%;left:86.14583333333333%;animation-delay:-0.95s;"></span>
			<span class="floating square" style="top:28.19203268641471%;left:25.208333333333332%;animation-delay:-4.45s;"></span>
			<span class="floating circle" style="top:39.7344228804903%;left:10.833333333333334%;animation-delay:-3.35s;"></span>
			<span class="floating triangle" style="top:77.83452502553627%;left:24.427083333333332%;animation-delay:-2.3s;"></span>
			<span class="floating triangle" style="top:2.860061287027579%;left:47.864583333333336%;animation-delay:-1.75s;"></span>
			<span class="floating triangle" style="top:71.3993871297242%;left:66.45833333333333%;animation-delay:-1.25s;"></span>
			<span class="floating triangle" style="top:31.256384065372828%;left:76.92708333333333%;animation-delay:-0.65s;"></span>
			<span class="floating triangle" style="top:46.47599591419816%;left:38.90625%;animation-delay:-0.35s;"></span>
			<span class="floating cross" style="top:3.4729315628192032%;left:19.635416666666668%;animation-delay:-4.3s;"></span>
			<span class="floating cross" style="top:3.575076608784474%;left:6.25%;animation-delay:-4.05s;"></span>
			<span class="floating cross" style="top:77.3237997957099%;left:4.583333333333333%;animation-delay:-3.75s;"></span>
			<span class="floating cross" style="top:0.9193054136874361%;left:71.14583333333333%;animation-delay:-3.3s;"></span>
			<span class="floating square" style="top:23.6976506639428%;left:63.28125%;animation-delay:-2.1s;"></span>
			<span class="floating square" style="top:81.30745658835546%;left:45.15625%;animation-delay:-1.75s;"></span>
			<span class="floating square" style="top:60.9805924412666%;left:42.239583333333336%;animation-delay:-1.45s;"></span>
			<span class="floating square" style="top:29.009193054136876%;left:93.90625%;animation-delay:-1.05s;"></span>
			<span class="floating square" style="top:52.093973442288046%;left:68.90625%;animation-delay:-0.7s;"></span>
			<span class="floating square" style="top:81.51174668028601%;left:83.59375%;animation-delay:-0.35s;"></span>
			<span class="floating square" style="top:11.542390194075587%;left:91.51041666666667%;animation-delay:-0.1s;"></span>
		</div>
	</div>

  <div class="home">
    <div class="saludillo">
      <h1>Bienvenido a Finstagram</h1>
      <p>¡Conéctate con tus amigos, comparte tus pensamientos y mucho más!</p>
    </div>
    <div class="container" id="container">
      <section v-if="!user">
        <div div class="form-container sign-up-container">
          <form @submit.prevent="registerUser">
            <h1>Creá una cuenta</h1>
            <span>o usá tú email para registrarte.</span>
            <input v-model="registerUsername" type="text" placeholder="Nombre" required />
            <input v-model="registerEmail" type="email" placeholder="Email" required />
            <input v-model="registerPassword" type="password" placeholder="Contraseña" required />
            <button>Registrarse</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form @submit.prevent="loginUser">
            <h1>Iniciá sesión</h1>
            <span>o usá tu cuenta.</span>
            <input v-model="loginEmail" type="email" placeholder="Email" required />
            <input v-model="loginPassword" type="password" placeholder="Contraseña" required />
            <a href="#">¿Olvidaste tú contraseña?</a>
            <button>Iniciar Sesión</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>¡Bienvenido de Vuelta!</h1>
              <p>¿Ya tenés cuenta? ¡Accedé con tús datos!</p>
              <button class="ghost" id="signIn">Iniciar Sesión</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>¡Bienvenido usuario!</h1>
              <p>¿No tenés una cuenta todavía? ¡Registrate!</p>
              <button class="ghost" id="signUp">Registrarse</button>
            </div>
          </div>
        </div>
      </section>
    </div>

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
import { db, auth } from '../../firebase';  // Ya tienes auth y db importados desde aquí
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";

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
  createUserWithEmailAndPassword(auth, this.registerEmail, this.registerPassword)
    .then(async (userCredential) => {
      const user = userCredential.user;

      // Guardar el nombre de usuario en Firestore
      try {
        // Cambia a setDoc para usar user.uid como ID del documento
        await setDoc(doc(db, "users", user.uid), {
          username: this.registerUsername,
          email: this.registerEmail,
          password: this.registerPassword, // Recuerda que no es recomendable guardar contraseñas en texto plano
          createdAt: new Date()
        });
        alert("Registro exitoso");
      } catch (error) {
        console.error("Error al guardar los datos en Firestore: ", error.message);
      }
    })
    .catch((error) => {
      console.error("Error al registrarse: ", error.message);
    });
},


    // Cargar las publicaciones de Firestore si hay un usuario autenticado
    loadPosts() {
      collection(db, 'posts').orderBy('date', 'desc').onSnapshot(snapshot => {
        this.posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      });
    }
  }
};


</script>