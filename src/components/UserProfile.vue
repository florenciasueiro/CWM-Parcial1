<template>
  <div v-if="user">
    <h1>{{ user.name }}</h1>
    <p>Email: {{ user.email }}</p>
    <!-- Otros detalles del usuario -->
  </div>
  <div v-else>
    <p>Hubo un error al cargar los datos del usuario...</p>
  </div>
</template>


<script>
import { db } from '../../firebase';
import { doc, getDoc } from "firebase/firestore";

export default {
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      user: null,
    };
  },
async created() {
  try {
    if (this.userId) {
      const userDoc = doc(db, 'users', this.userId);
      const userSnap = await getDoc(userDoc);
      if (userSnap.exists()) {
        this.user = userSnap.data();
      } else {
        console.log("No existe el usuario");
      }
    } else {
      console.error("userId no está definido");
    }
  } catch (error) {
    console.error("Error al obtener los datos del usuario:", error.message);
  }
}
};
</script>