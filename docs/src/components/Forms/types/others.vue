<script>
import TypesCard from '../support/types-card'

export default {
  name: 'OthersType',
  components: { TypesCard },
  data: () => ({
    form: {},
    model: {
      range: { min: 0, max: 10 },
      datetime: new Date()
    },
    fields: [
      {
        key: 'range',
        type: 'range',
        templateOptions: {
          range: {
            label: true,
            step: 1,
            min: 0,
            max: 10,
            square: true,
            snap: true,
            markers: true
          }
        }
      },
      {
        key: 'datetime',
        type: 'datetime',
        templateOptions: {
          datetime: {
            'stack-label': 'Choice the date'
          }
        }
      }
    ]
  })
}
</script>

<template lang="html">
  <div class="input-type">
    <TypesCard title="Others components">
      <pre><code>{{ model }}</code></pre>

      <formly-form :form="form" :model="model" :fields="fields" />
    </TypesCard>
  </div>
</template>

<style lang="css">
</style>
