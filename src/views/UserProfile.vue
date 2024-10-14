<template>
  <div>
    <h1>Perfil de Usuario</h1>
    <p>Nombre: {{ userProfile.username }}</p>
    <p>Email: {{ userProfile.email }}</p>
    <!-- Otros detalles del perfil -->
  </div>
</template>

<script>
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export default {
  props: ['userId'],
  data() {
    return {
      userProfile: null,
    };
  },
  async created() {
    // Cargar los datos del usuario desde Firestore usando el userId
    const userDoc = await getDoc(doc(db, 'users', this.userId));
    if (userDoc.exists()) {
      this.userProfile = userDoc.data();
    } else {
      console.error('El perfil no fue encontrado');
    }
  },
};
</script>
