<script>
import * as Types from './types'

export default {
  name: 'Forms',
  components: { ...Types }
}
</script>

<template>
  <div class="forms">
    <div class="row sm-gutter">
      <div class="col-md-6">
        <InputType />
      </div>

      <div class="col-md-6">
        <SelectType />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .forms >>> fieldset {
    border: 0;
    padding: 0;
    margin: 0;
  }
</style>
