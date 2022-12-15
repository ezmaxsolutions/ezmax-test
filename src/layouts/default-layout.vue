<template>
   <q-layout view="hhh lpR lFr">
      <q-header elevated>
         <q-toolbar>
            <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

            <q-toolbar-title>Ezmax Test App</q-toolbar-title>
         </q-toolbar>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
         <q-list>
            <ez-menu-link-item v-for="link in theLinks" :key="link.title" v-bind="link" />
         </q-list>
      </q-drawer>

      <q-page-container>
         <router-view />
      </q-page-container>
   </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EzMenuLinkItem from 'src/components/menu-link-item/ez-menu-link-item.vue'

// TODO: Ajouter une page /about (ajouter également dans les routes.ts)
const theLinks = [
   {
      title: 'Accueil',
      caption: 'On vous aime!',
      icon: 'home',
      link: '/accueil'
   },
   {
      title: 'Liste des Pokémons',
      caption: 'Atrappez-les tous!',
      icon: 'catching_pokemon',
      link: '/pokemon'
   }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
   leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
