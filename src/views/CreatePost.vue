<template>
  <main class="content">
    <div class="create-post">
      <h2>Crear nueva publicación</h2>
      <form @submit.prevent="createPost">
        <input v-model="newPostTitle" placeholder="Título" required />
        <textarea v-model="newPostDescription" placeholder="Descripción" required></textarea>
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
            <h3>{{ post.titulo }}</h3>
            <p>Publicado por: {{ post.autor }}</p>
          </header>
          <section>
            <p>{{ post.descripcion }}</p>
            <p><strong>Fecha de publicación:</strong> {{ new Date(post.fecha_publicacion.seconds * 1000).toLocaleDateString() }}</p>
          </section>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase';  // Importa la configuración de Firebase

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

      // Verifica si el usuario está autenticado y usa el displayName o el email
      const author = this.user ? (this.user.displayName || this.user.email) : 'Anónimo';

      try {
        await addDoc(collection(db, 'posts'), {
          titulo: this.newPostTitle,
          descripcion: this.newPostDescription,
          autor: author,
          fecha_publicacion: new Date()
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
