<script>
import {
  QChip,
  QLayout,
  QToolbar,
  QToolbarTitle
} from 'quasar'

import { version } from '../../package.json'

export default {
  name: 'App',
  components: {
    QChip,
    QLayout,
    QToolbar,
    QToolbarTitle
  },
  data: () => ({
    version
  })
}
</script>

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
          Developed by <a href="https://github.com/decision6" class="text-info" target="blanck"> Decision6 Team </a>
        </p>

        <QChip small class="lib-version"> Version {{ version }} </QChip>
      </q-toolbar>
    </q-layout>
  </div>
</template>

<style scoped>
  .generic-margin {
    margin: 10px;
  }

  .lib-version {
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
</style>
