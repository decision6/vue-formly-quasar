<script>
import * as Types from './types'

export default {
  name: 'Forms',
  components: { ...Types }
}
</script>

<template>
  <div class="forms">
    <InputType />
  </div>
</template>

<style scoped>
  .forms >>> fieldset {
    border: 0;
    padding: 0;
    margin: 0;
  }
</style>
