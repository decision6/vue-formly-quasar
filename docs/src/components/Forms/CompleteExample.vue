<script>
export default {
  name: 'CompleteExample',
  data () {
    return {
      form: {},
      model: {
        firstName: '',
        lastName: '',
        age: 1,
        genre: 'M',
        toggle: true,
        select: 'go'
      },
      fields: [
        {
          key: 'firstName',
          type: 'input',
          required: true,
          templateOptions: {
            field: {
              icon: 'person',
              'error-label': 'The person name is invalid'
            },
            input: {
              'float-label': 'First name',
              type: 'text'
            }
          }
        },
        {
          key: 'lastName',
          type: 'input',
          templateOptions: {
            field: {
              icon: 'person'
            },
            input: {
              'float-label': 'Last name',
              type: 'text'
            }
          }
        },
        {
          key: 'age',
          type: 'input',
          required: true,
          validators: {
            isValid: 'model[ field.key ] <= 100 && model[ field.key ] >= 1'
          },
          templateOptions: {
            field: {
              icon: 'person',
              helper: 'Age must be beetwen 1 and 100 years old',
              'error-label': 'Age invalid'
            },
            input: {
              'float-label': 'Age',
              type: 'number',
              min: 1,
              max: 120
            }
          }
        },
        {
          key: 'genre',
          type: 'option-group',
          templateOptions: {
            field: {
              icon: 'person'
            },
            option_group: {
              type: 'radio',
              inline: true,
              options: [
                {
                  value: 'M',
                  label: 'Male'
                },
                {
                  value: 'F',
                  label: 'Female'
                }
              ]
            }
          }
        },
        {
          key: 'select',
          type: 'select',
          templateOptions: {
            field: {
              icon: 'business'
            },
            select: {
              'float-label': 'Works at',
              color: 'secondary',
              inverted: true,
              options: [
                {
                  label: 'Google',
                  value: 'go'
                },
                {
                  label: 'Facebook',
                  value: 'fb'
                }
              ]
            }
          }
        }
      ]
    }
  }
}
</script>

<template lang="html">
  <div class="complete-example">
    <h4> Complete example (without form wrapper) </h4>

    <br>
    <pre><code>{{ model }}</code></pre>

    <formly-form
      :model="model"
      :fields="fields"
      :form="form" />
  </div>
</template>

<style lang="css">
  .complete-example {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
