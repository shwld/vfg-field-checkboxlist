/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('vue form generator', module)
  .add('checkbox-list', () => ({
    template: `
      <div class="card m-3">
        <div class="card-body">
          <form class="form">
            <vue-form-generator :schema="schema" :model="model" :options="formOptions" />
            value: {{model}}
          </form>
        </div>
      </div>
    `,
    data: () => ({
      schema: {
        fields: [
          {
            type: 'checkbox-list',
            label: 'ラベル',
            model: 'test',
            required: true,
            values: [
              { name: 'test', value: 'test' },
              { name: 'test2', value: 'test2' }
            ]
          }
        ]
      },
      model: {
        test: []
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        fieldIdPrefix: 'my-'
      }
    })
  }))
