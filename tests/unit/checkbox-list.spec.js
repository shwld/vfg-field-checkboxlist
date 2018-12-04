import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator/dist/vfg-core'
import CheckboxList from '@/components/CheckboxList.vue'

Vue.component('fieldCheckboxList', CheckboxList)
Vue.use(VueFormGenerator)

describe('CheckboxList.vue', () => {
  it('renders props.msg when passed', () => {
    const props = {
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
    }
    const wrapper = shallowMount(VueFormGenerator, props)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
