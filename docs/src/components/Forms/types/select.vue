<script>
import TypesCard from '../support/types-card'

export default {
  name: 'SelectType',
  components: { TypesCard },
  data: () => ({
    form: {},
    model: {
      country: ''
    },
    fields: [
      {
        key: 'country',
        type: 'select',
        required: true,
        templateOptions: {
          field: {
            'error-label': 'The country is required'
          },
          select: {
            'stack-label': 'Type a country',
            options: [
              {
                value: 'br',
                label: 'Brazil'
              },
              {
                value: 'fr',
                label: 'France'
              },
              {
                value: 'eua',
                label: 'United States'
              }
            ]
          }
        }
      }
    ]
  })
}
</script>

<template lang="html">
  <div class="input-type">
    <TypesCard title="Select components">
      <pre><code>{{ model }}</code></pre>

      <formly-form :form="form" :model="model" :fields="fields" />

      <a href="#"> See component </a>
    </TypesCard>
  </div>
</template>

<style lang="css">
</style>
