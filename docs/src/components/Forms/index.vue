<script>
import * as Types from './types'
import CompleteExample from './CompleteExample.vue'

export default {
  name: 'Forms',
  components: { ...Types, CompleteExample }
}
</script>

<template>
  <div class="forms">
    <p>
      For more information, <a href="https://github.com/decision6/vue-formly-quasar">see the docs</a>
    </p>
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

    <br>

    <CompleteExample />
  </div>
</template>

<style scoped>
  .forms >>> fieldset {
    border: 0;
    padding: 0;
    margin: 0;
  }
</style>
