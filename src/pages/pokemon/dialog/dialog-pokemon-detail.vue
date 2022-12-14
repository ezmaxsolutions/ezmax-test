<template>
   <div>
      <!-- TODO: Créer ce qui sera afficher dans les détails de ce pokémon -->
      <!-- TODO: Afficher le name, height, weight, abilities, images -->
   </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

export interface IPokemon {
   name: string
}

defineProps({
   details: {
      type: Object as PropType<IPokemon>,
      default: undefined
   }
})
</script>

<style lang="scss" scoped>
// TODO: Styliser l'affichage dans le popup
</style>
