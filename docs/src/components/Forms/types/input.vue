<script>
import TypesCard from '../support/types-card'

export default {
  name: 'InputType',
  components: { TypesCard },
  data: () => ({
    form: {},
    model: {
      name: '',
      age: null,
      country: ''
    },
    fields: [
      {
        key: 'name',
        type: 'input',
        required: true,
        templateOptions: {
          field: {
            'error-label': 'The name is required',
            count: 20
          },
          input: {
            'stack-label': 'Tell your name',
            maxLength: 20
          }
        }
      },
      {
        key: 'age',
        type: 'input',
        validators: {
          isAgeValid: 'model[field.key] >= 0'
        },
        templateOptions: {
          field: {
            'error-label': 'Age can not be less than 0'
          },
          input: {
            type: 'number',
            'stack-label': 'Tell your age'
          }
        }
      },
      {
        key: 'country',
        type: 'autocomplete',
        required: true,
        templateOptions: {
          field: {
            'error-label': 'The country is required'
          },
          input: {
            'stack-label': 'Type a country'
          },
          autocomplete: {
            staticData: {
              field: 'label',
              list: [
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
      }
    ]
  })
}
</script>

<template lang="html">
  <div class="input-type">
    <TypesCard title="Inputs components">
      <pre><code>{{ model }}</code></pre>

      <formly-form :form="form" :model="model" :fields="fields" />
    </TypesCard>
  </div>
</template>

<style lang="css">
</style>
