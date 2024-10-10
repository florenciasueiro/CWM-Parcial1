import { createApp } from 'vue';  // Importa la función para crear una app en Vue 3
import App from './App.vue';      // Importa el componente principal App.vue
import router from './router';    // Importa las rutas, si estás usando vue-router
import store from './store';      // Importa el store de Vuex, si estás usando Vuex
import './assets/styles.css';     // Importa estilos globales, si los tienes

// Crea la aplicación de Vue y le inyecta el router y el store (si existen)
createApp(App)
  .use(router)   // Usa el router para navegación (si tienes vue-router configurado)
  .use(store)    // Usa Vuex para el manejo del estado global (si tienes vuex configurado)
  .mount('#app');  // Monta la aplicación en el elemento con id "app" en el HTML
