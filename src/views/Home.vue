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

    <!-- Mostrar perfil de usuario si está autenticado -->
    <section class="saludillo" v-if="user">
      <p>Esto significa que el usuario está registrado</p>
      <UserProfile :user="user" @logout="user = null" />
      <button class="profile" @click="goToProfile">Mi Perfil</button>
      <button class="logout" @click="logoutUser">Cerrar Sesión</button>
    </section>

    <!-- Formulario de login/registro si el usuario no está autenticado -->
    <section v-if="!user">
      <div class="container" id="container">
        <div class="form-container sign-up-container">
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
              <button class="ghost" @click="switchToSignIn">Iniciar Sesión</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>¡Bienvenido usuario!</h1>
              <p>¿No tenés una cuenta todavía? ¡Registrate!</p>
              <button class="ghost" @click="switchToSignUp">Registrarse</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de publicaciones y crear publicación (si el usuario está autenticado) -->
    <section class="publis" v-if="user">
      <h2>Crear nueva publicación</h2>
      <form @submit.prevent="createPost">
        <input v-model="newPostTitle" placeholder="Título" required />
        <textarea v-model="newPostDescription" placeholder="Descripción" required></textarea>
        <button type="submit">Publicar</button>
      </form>

      <h2>Últimas Publicaciones</h2>
      <div v-if="posts.length === 0">
        <p>No hay publicaciones aún. ¡Sé el primero en publicar!</p>
      </div>
      <div class="posteos" v-else>
        <article v-for="post in posts" :key="post.id" class="post">
          <header>
            <h3>{{ post.titulo }}</h3>
            <p>Publicado por: {{ post.autor }}</p>
          </header>
          <section>
            <p>{{ post.descripcion }}</p>
            <p><strong>Fecha de publicación:</strong> {{ post.fecha_publicacion.toLocaleDateString() }}</p>
          </section>
          <!-- Sección de comentarios -->
          <section class="comments">
            <h4>Comentarios</h4>
            <div v-if="post.comments && post.comments.length > 0">
              <div v-for="comment in post.comments" :key="comment.id" class="comment">
                <p><strong>{{ comment.autor }}:</strong> {{ comment.contenido }}</p>
              </div>
            </div>
            <p v-else>No hay comentarios aún. ¡Sé el primero en comentar!</p>

            <form @submit.prevent="addComment(post.id)">
              <textarea v-model="newCommentText[post.id]" placeholder="Escribe un comentario..." required></textarea>
              <button type="submit">Comentar</button>
            </form>
          </section>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import { db, auth } from '../../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { collection, doc, setDoc, query, orderBy, onSnapshot, addDoc, where } from "firebase/firestore";
export default {
  data() {
    return {
      user: null,
      posts: [],
      newPostTitle: '',
      newPostDescription: '',
      newCommentText: {}, // Almacenar los comentarios por publicación
      loginEmail: '',
      loginPassword: '',
      registerUsername: '',
      registerEmail: '',
      registerPassword: ''
    };
  },
  created() {
    auth.onAuthStateChanged(user => {
      this.user = user;
      if (this.user) {
        this.loadPosts();
      }
    });
  },
  methods: {
    // Cargar publicaciones y comentarios
loadPosts() {
  const postsQuery = query(collection(db, 'posts'), orderBy('fecha_publicacion', 'desc'));
  onSnapshot(postsQuery, snapshot => {
    this.posts = snapshot.docs.map(doc => {
      const postData = doc.data();
      return {
        id: doc.id,
        ...postData,
        fecha_publicacion: postData.fecha_publicacion.toDate() // Convertir Timestamp a Date
      };
    });
    // Cargar los comentarios de la colección 'comments' para cada post
    this.posts.forEach(post => {
      const commentsQuery = query(collection(db, 'comments'), where('postId', '==', post.id));
      onSnapshot(commentsQuery, commentSnapshot => {
        post.comments = commentSnapshot.docs.map(commentDoc => ({
          id: commentDoc.id,
          ...commentDoc.data()
        }));
      });
    });
  });
},
    // Crear una nueva publicación
    async createPost() {
      if (!this.newPostTitle || !this.newPostDescription) return;
      const author = this.user ? (this.user.displayName || this.user.email) : 'Anónimo';
      try {
        await addDoc(collection(db, 'posts'), {
          titulo: this.newPostTitle,
          descripcion: this.newPostDescription,
          autor: author,
          fecha_publicacion: new Date()
        });
        this.newPostTitle = '';
        this.newPostDescription = '';
      } catch (error) {
        console.error("Error al crear la publicación: ", error.message);
      }
    },
    // Añadir un comentario
    async addComment(postId) {
      const commentText = this.newCommentText[postId]; // Obtener el comentario para la publicación
      if (!commentText) return;
      const author = this.user ? (this.user.displayName || this.user.email) : 'Anónimo';
      try {
        // Añadir el comentario a la colección 'comments' en Firebase
        await addDoc(collection(db, 'comments'), {
          contenido: commentText,
          autor: author,
          publicacion: new Date(),  // Timestamp de la publicación del comentario
          postId: postId  // Relacionar comentario con la publicación
        });
        // Limpiar el campo de comentario tras enviarlo
        this.newCommentText[postId] = ''; 
      } catch (error) {
        console.error("Error al agregar el comentario: ", error.message);
      }
    },
    // Registrar un nuevo usuario
    async registerUser() {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.registerEmail, this.registerPassword);
        this.user = userCredential.user;
        // Guardar el nombre de usuario en Firebase Auth
        await updateProfile(this.user, {
          displayName: this.registerUsername
        });
        // Limpiar campos
        this.registerUsername = '';
        this.registerEmail = '';
        this.registerPassword = '';
      } catch (error) {
        console.error("Error al registrar usuario: ", error.message);
      }
    },
    // Iniciar sesión
    async loginUser() {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.loginEmail, this.loginPassword);
        this.user = userCredential.user;
      } catch (error) {
        console.error("Error al iniciar sesión: ", error.message);
      }
    },
    // Cerrar sesión
    async logoutUser() {
      try {
        await signOut(auth);
        this.user = null;
      } catch (error) {
        console.error("Error al cerrar sesión: ", error.message);
      }
    },
    // Cambiar entre registro y login (si tienes animaciones o clases dinámicas)
    switchToSignIn() {
      document.getElementById('container').classList.remove('right-panel-active');
    },
    switchToSignUp() {
      document.getElementById('container').classList.add('right-panel-active');
    },
    // Ir al perfil
    goToProfile() {
      this.$router.push('/profile');
    }
  }
};
</script>