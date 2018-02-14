<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout
      ref="layout"
    >
      <q-toolbar slot="header" color="indigo-10">

        <q-toolbar-title>
          Vue Formy Quasar docs
        </q-toolbar-title>
      </q-toolbar>

      <div class="generic-margin">
        <div>
          <router-view />
        </div>
      </div>

      <q-toolbar slot="footer" color="indigo-10">
        <p class="no-margin">
          Developed by <a href="https://github.com/decision6" class="text-info"> Decision6 Team </a>
        </p>
      </q-toolbar>
    </q-layout>
  </div>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle
} from 'quasar'

export default {
  name: 'Root',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle
  }
}
</script>

<style scoped>
  .generic-margin {
    margin: 10px;
  }
</style>
