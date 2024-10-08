<template>
  <article class="post">
    <header>
      <h2>{{ post.title }}</h2>
      <p>Publicado por {{ post.author }}</p>
    </header>
    <section>
      <p>{{ post.content }}</p>
    </section>
    <footer>
      <p>{{ post.date }}</p>
      <comment-component v-for="comment in post.comments" :key="comment.id" :comment="comment" />
    </footer>
  </article>
</template>

<script>
import CommentComponent from './CommentComponent.vue';

export default {
  props: ['post'],
  components: {
    CommentComponent
  }
};
</script>
