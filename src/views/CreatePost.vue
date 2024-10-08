<template>
  <div>
    <form @submit.prevent="createPost">
      <input v-model="title" placeholder="Título de la publicación" required />
      <textarea v-model="content" placeholder="Escribe aquí..." required></textarea>
      <button type="submit">Publicar</button>
    </form>
  </div>
</template>

<script>
import { db, auth } from '../firebase';

export default {
  data() {
    return {
      title: '',
      content: ''
    };
  },
  methods: {
    createPost() {
      const user = auth.currentUser;
      db.collection('posts').add({
        title: this.title,
        content: this.content,
        author: user.email,
        date: new Date()
      });
      this.title = '';
      this.content = '';
    }
  }
};
</script>
