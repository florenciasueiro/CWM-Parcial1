<template>
  <main class="content">
    <div class="create-post">
      <h2>Crear nueva publicación</h2>
      <form @submit.prevent="createPost">
        <textarea v-model="newPostContent" placeholder="¿Qué estás pensando?" required></textarea>
        <button type="submit">Publicar</button>
      </form>
    </div>

    <!-- Lista de publicaciones -->
    <section class="posts">
      <h2>Últimas Publicaciones</h2>
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
  </main>
</template>

<script>
import { collection, addDoc, orderBy } from "firebase/firestore";
import { db } from '../../firebase';  // Asegúrate de tener Firebase configurado

export default {
  props: ['user'],  // Recibe el usuario autenticado desde el componente padre
  data() {
    return {
      posts: [],
      newPostContent: ''
    };
  },
  created() {
    this.loadPosts();  // Cargar las publicaciones al montar el componente
  },
  methods: {
    // Crear nueva publicación
    createPost() {
      if (!this.newPostContent) return;
      
      addDoc(collection(db, 'posts'), {
        content: this.newPostContent,
        author: this.user.displayName || this.user.email,
        date: new Date()
      }).then(() => {
        this.newPostContent = '';  // Limpiar el campo de la publicación
        this.loadPosts();  // Recargar las publicaciones
      }).catch((error) => {
        console.error("Error al crear la publicación: ", error.message);
      });
    },

    // Cargar las publicaciones de Firestore
    loadPosts() {
      collection(db, 'posts').orderBy('date', 'desc').onSnapshot(snapshot => {
        this.posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      });
    }
  }
};
</script>

