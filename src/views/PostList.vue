<template>
  <main class="content">

    <!-- Lista de publicaciones -->
    <section class="posts">
      <h2>Últimas Publicaciones</h2>
      <div v-if="posts.length === 0">
        <p>No hay publicaciones aún. ¡Sé el primero en publicar!</p>
      </div>
      <div v-else>
        <article v-for="post in posts" :key="post.id" class="post">
          <header>
            <h3>{{ post.titulo }}</h3>
            <p>Publicado por: {{ post.autor }}</p>
          </header>
          <section>
            <p>{{ post.descripcion }}</p>
            <p><strong>Fecha de publicación:</strong> {{ new Date(post.fecha_publicacion.seconds * 1000).toLocaleDateString() }}</p>
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
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase';  // Asegúrate de tener Firebase configurado

export default {
  props: ['user'],  // Recibe el usuario autenticado desde el componente padre
  data() {
    return {
      posts: [],
      newPostTitle: '',
      newPostDescription: ''
    };
  },
  created() {
    this.loadPosts();  // Cargar las publicaciones al montar el componente
  },
  methods: {
    // Crear nueva publicación
    async createPost() {
      if (!this.newPostTitle || !this.newPostDescription) return;

      try {
        await addDoc(collection(db, 'posts'), {
          titulo: this.newPostTitle,
          descripcion: this.newPostDescription,
          autor: this.user.displayName || this.user.email,
          fecha_publicacion: new Date()  // Se guardará como Timestamp en Firestore
        });
        this.newPostTitle = '';  // Limpiar el campo de título
        this.newPostDescription = '';  // Limpiar el campo de descripción
        this.loadPosts();  // Recargar las publicaciones
      } catch (error) {
        console.error("Error al crear la publicación: ", error.message);
      }
    },

    // Cargar las publicaciones de Firestore
    loadPosts() {
      const postsQuery = query(collection(db, 'posts'), orderBy('fecha_publicacion', 'desc'));
      onSnapshot(postsQuery, snapshot => {
        this.posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      });
    }
  }
};
</script>

