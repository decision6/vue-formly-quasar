# Quasar Formly

Theme for [Vue Formly](https://github.com/formly-js/vue-formly) using [Quasar components](http://quasar-framework.org/components/).

## Requirements

The plugin depends:

+ [Vue Formly](https://github.com/formly-js/vue-formly)
+ [Quasar](http://quasar-framework.org/guide/)

## Install plugin

On `main.js` on Quasar template:

```js
// code above

import Vue from 'vue'
import Quasar from 'quasar'
import VueFormly from 'vue-formly'
import QFormly from 'vue-formly-quasar'

// Install plugins
Vue.use(Quasar)
Vue.use(VueFormly)
Vue.use(QFormly)

// code below
```

It's very important that `VueFormly` plugin has been install before `QFormly` plugin.

## Usage

On template

```html
<q-formly
  :confirmButton="confirmButton"
  :model="model"
  :fields="fields"
  @submit="submitForm"></q-formly>
```

On script tag

```js
export default {
  data () {
    return {
      confirmButton: {
        text: 'Save'
      },
      model: {
        firstName: '',
        lastName: '',
        age: 1,
        genre: 'M',
        toggle: true,
        select: 'goog'
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
              helper: 'Agr must be beetwen 1 and 100 years old',
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
              label: 'Defina o gênero',
              'label-width': 3
            },
            type: 'radio',
            inline: true,
            options: [
              {
                value: 'M',
                label: 'Masculino'
              },
              {
                value: 'F',
                label: 'Feminino'
              }
            ]
          }
        },
        {
          key: 'select',
          type: 'select',
          templateOptions: {
            field: {
              label: 'Trabalha no(a)',
              'label-width': 3
            },
            input: {
              color: 'secondary',
              inverted: true,
              options: [
                {
                  label: 'Google',
                  value: 'goog'
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
```

## QFormly component

### Properties

| Property |  Type  | Required |                    Description                    |
|:--------:|:------:|:--------:|:-------------------------------------------------:|
|   model  | Object |   true   | Form model                                        |
|  fields  |  Array |   true   | An array of objects with each field on your form. |

### Methods

The event emited on `q-formly` is `submit`, with `model` value.

### Fields array

The fields array is the same key present on vue-formly interface. [Complete documentation are here](https://matt-sanders.gitbooks.io/vue-formly/content/v/2.0/how_to_use/properties_and_options.html). Remember that `form` property is not necessary on `q-formly` component.

### templateOptions key on input, toggle, range and select keys

+ **field**: an options object for [QField component](http://quasar-framework.org/components/field.html).

+ **input**: an options objetc for each Quasar component.

#### Example

```js
{
  // options to vue-formly
  key: 'firstName',
  type: 'input',
  required: true,
  // options to each component
  templateOptions: {
    // options to QField
    field: {
      icon: 'person',
      'error-label': 'The person name is invalid'
    },
    // options to QInput, QSelect, QRange and QToggle
    input: {
      'float-label': 'First name',
      type: 'text'
    }
  }
}
```

### templateOptions for QOptionGroup component

+ **field**: the same that was presented before

The other properties will be inject in the component except the field property.

#### Example

```js
{
  key: 'genre',
  type: 'option-group',
  templateOptions: {
    // options to QField component
    field: {
      label: 'Defina o gênero',
      'label-width': 3
    },
    // options to QOptionGroup component
    type: 'radio',
    inline: true,
    options: [
      {
        value: 'M',
        label: 'Masculino'
      },
      {
        value: 'F',
        label: 'Feminino'
      }
    ]
  }
}
```
