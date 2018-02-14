<script>
import TypesCard from '../support/types-card'

export default {
  name: 'InputType',
  components: { TypesCard },
  data: () => ({
    form: {},
    model: {
      name: '',
      age: null
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
            'error-label': 'The name is required'
          },
          input: {
            type: 'number',
            'stack-label': 'Tell your age'
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
      <formly-form :form="form" :model="model" :fields="fields" />
    </TypesCard>
  </div>
</template>

<style lang="css">
</style>
