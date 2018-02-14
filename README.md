# Quasar Formly

Theme for [Vue Formly](https://github.com/formly-js/vue-formly) using [Quasar components](http://quasar-framework.org/components/).

**Sugestion**: for formly-js wrapper, use [QFormly](https://github.com/decision6/q-formly) plugin.

## Requirements

The plugin depends:

+ [Vue Formly](https://github.com/formly-js/vue-formly)
+ [Quasar](http://quasar-framework.org/guide/)

## Install

```bash
yarn add vue-formly vue-formly-quasar
```

On `main.js` on Quasar template:

```js
// code above

import Vue from 'vue'
import Quasar from 'quasar'
import VueFormly from 'vue-formly'
import VueFormlyQuasar from 'vue-formly-quasar'

// Install plugins
Vue.use(Quasar)
Vue.use(VueFormly)
Vue.use(VueFormlyQuasar)

// code below
```

It's very important that `VueFormly` plugin has been install before `VueFormlyQuasar` plugin.

## Usage

On template

```html
<formly-form
  :model="model"
  :fields="fields"
  :form="form" />
```

On script tag

```js
export default {
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
```

## FormlyForm component

### Properties

| Property |  Type  | Required |                                  Description                                 |
|:--------:|:------:|:--------:|:----------------------------------------------------------------------------:|
|   model  | Object |    yes   |                                  Form model                                  |
|  fields  |  Array |    yes   |               An array of objects with each field on your form.              |
|   form   | Object |    yes   | An empty object that will be populated with control information by component |

### Fields array

The fields array is the same key present on vue-formly interface. [Complete documentation are here](https://matt-sanders.gitbooks.io/vue-formly/content/v/2.0/how_to_use/properties_and_options.html)

Each field has at least two properties in the root of the templateOptions object: **field** and **name of the input type**. For the last, the name of key will be Quasar inputs. The component support the follow components:

- input;
- select;
- range;
- datetime;
- option group;
- checkbox;
- radio;
- toogle;
- autocomplete;

To be clearer, follow the diagram below:

```js
const fields = [
  {
    key: 'name', // name from key on model object
    type: 'input', // formly type
    templateOptions: {
      // bind to QField component
      field: {
        'error-message': 'The name is invalid'
      },

      // bind to Quasar component. The key name can be:
      // - input, toogle, radio, checkbox;
      // - autocomplete, datetime, option_group
      // - select and range
      input: {
        'float-label': 'Type your name'
      }
    }
  }
]
```
