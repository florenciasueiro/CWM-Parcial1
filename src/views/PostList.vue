<template>
  <div>
    <h1>Publicaciones</h1>
    <article v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
      <p>Publicado por: {{ post.author }}</p>
      <comment-component v-for="comment in post.comments" :key="comment.id" :comment="comment" />
    </article>
  </div>
</template>

<script>
import { db } from '../../firebase';

export default {
  data() {
    return {
      posts: []
    };
  },
  created() {
    db.collection('posts').onSnapshot(snapshot => {
      this.posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });
  }
};
</script>