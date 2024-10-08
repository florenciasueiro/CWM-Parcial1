<template>
  <div>
    <h1>Perfil de {{ user.email }}</h1>
    <button @click="editProfile">Editar Perfil</button>
    <div>
      <h2>Tus Publicaciones</h2>
      <post-component v-for="post in userPosts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import { auth, db } from '../firebase';

export default {
  data() {
    return {
      user: auth.currentUser,
      userPosts: []
    };
  },
  created() {
    db.collection('posts').where('author', '==', this.user.email).onSnapshot(snapshot => {
      this.userPosts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });
  },
  methods: {
    editProfile() {
      // Lógica para editar el perfil del usuario
    }
  }
};
</script>
