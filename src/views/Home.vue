<template>
  <div class="home">
    <!-- Bienvenida -->
    <section v-if="!user">
      <h1>Bienvenido a Finstagram</h1>
      <p>¡Conéctate con tus amigos, comparte tus pensamientos y mucho más!</p>
      <router-link to="/login">Iniciar Sesión</router-link> | 
      <router-link to="/register">Registrarse</router-link>
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

export default {
  data() {
    return {
      user: null,   // Estado para manejar al usuario autenticado
      posts: []     // Lista de publicaciones
    };
  },
  created() {
    // Verifica si el usuario está autenticado
    auth.onAuthStateChanged(user => {
      this.user = user;
    });

    // Cargar las publicaciones de Firestore si hay un usuario autenticado
    if (this.user) {
      db.collection('posts').orderBy('date', 'desc').onSnapshot(snapshot => {
        this.posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      });
    }
  }
};
</script>