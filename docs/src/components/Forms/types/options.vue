<script>
import TypesCard from '../support/types-card'
export default {
  name: 'OptionTypes',
  components: { TypesCard },
  data: () => ({
    form: {},
    model: {
      radio: false,
      checkbox: true,
      toggle: true,
      option: 'two'
    },
    fields: [
      {
        key: 'radio',
        type: 'radio',
        templateOptions: {
          radio: {
            label: 'Simple radio input',
            value: false
          }
        }
      },
      {
        key: 'checkbox',
        type: 'checkbox',
        templateOptions: {
          checkbox: {
            label: 'Simple checkbox input',
            value: false
          }
        }
      },
      {
        key: 'toggle',
        type: 'toggle',
        templateOptions: {
          toggle: {
            label: 'Simple toggle input',
            value: false
          }
        }
      },
      {
        key: 'option',
        type: 'option-group',
        templateOptions: {
          field: {
            label: 'Choose one of two',
            'error-message': 'The input is required'
          },
          option_group: {
            type: 'radio',
            'left-label': true,
            inline: true,
            options: [
              {
                value: 'one',
                label: 'One'
              },
              {
                value: 'two',
                label: 'Two'
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
  <div class="option-type">
    <TypesCard title="Options components">
      <pre><code>{{ model }}</code></pre>

      <formly-form :form="form" :model="model" :fields="fields" />

      <a href="#"> See component </a>
    </TypesCard>
  </div>
</template>

<style lang="css">
</style>
