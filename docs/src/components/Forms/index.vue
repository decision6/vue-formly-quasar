<script>
import * as Types from './types'

export default {
  name: 'Forms',
  components: { ...Types }
}
</script>

<template>
  <div class="forms">
    <h4> Examples of components </h4>
    <div class="row sm-gutter">
      <div class="col-md-6">
        <InputType />
      </div>

      <div class="col-md-6">
        <SelectType />
      </div>

      <div class="col-md-6">
        <OptionType />
      </div>

      <div class="col-md-6">
        <OthersType />
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
