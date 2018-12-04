import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
export default {
  input: 'src/field-checkbox-list.js',
  output: {
    name: 'FieldCheckboxList',
    exports: 'named'
  },
  plugins: [
    vue({
      css: true,
      compileTemplate: true
    }),
    buble()
  ]
}
