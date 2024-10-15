<template>
  <div>
    <h1>Este es el perfil de {{ user.name }}</h1>
    <p>Email: {{ user.email }}</p>
    <!-- Más información -->
  </div>
</template>

<script>
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default {
  props: ['userId'],
  data() {
    return {
      user: {}
    };
  },
  async created() {
    const db = getFirestore();
    const userRef = doc(db, 'users', this.userId); // Ruta a tu colección en Firebase
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      this.user = userDoc.data();
    } else {
      console.log("No such user!");
    }
  }
};
</script>
