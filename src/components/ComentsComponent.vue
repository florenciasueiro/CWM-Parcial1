<template>
  <div class="comment">
    <p><strong>{{ comment.author }}</strong>: {{ comment.text }}</p>
  </div>
</template>

<script>
export default {
  props: ['comment']
};
</script>
