<template>
   <q-page class="q-ma-lg">
      <div class="text-h4">Liste des Pokémons</div>
      <pre>
- TODO: Créer une liste de Pokémons dans une QTable
- TODO: Créer une pagination
- TODO: Créer une recherche qui filtre le tableau
- TODO: Pouvoir cliquer sur une ligne (row) pour afficher les détails d'un Pokémon dans un QDialog (mettre le component dialog-pokemon-detail)
- TODO: S'assurer de créer des modèles Typescript pour les éléments ex. IPokemon
      </pre>
   </q-page>
</template>

<script setup lang="ts">
import { api } from 'boot/axios'

function fetchPokemons() {
   api.get('pokemon')
      .then((res) => {
         // TODO: Définir res.data avec une interface Typescript ex. IPokemon
         console.log(res.data)
      })
      .catch(() => {
         // TODO: Créer une gestion d'erreur en cas d'absence de répoonse.
      })
}

function load() {
   fetchPokemons()
}

load()
</script>

<style scoped></style>
