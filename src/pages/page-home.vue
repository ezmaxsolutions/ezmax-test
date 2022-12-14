<template>
   <q-page class="q-ma-lg">
      <div class="text-h4">Bienvenue {{ theName }}</div>
      <pre>TODO: Ajouter une introduction au site web (lorem ipsum) ainsi qu'un bouton pour accéder à la liste des pokémons</pre>
   </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// TODO: Changer pour votre nom
const theName = ref('YOUR_NAME')
</script>
