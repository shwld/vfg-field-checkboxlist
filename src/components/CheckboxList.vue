<template>
  <div class="checkbox-list">
    <div
      v-for="item in items"
      :key="item.value"
      class="form-check form-check-inline"
    >
      <label class="form-check-label">
        <input
          type="checkbox"
          class="form-check-input"
          :value="item.value"
          :checked="(value || []).includes(item.value)"
          @change="handleChange"
        />
        {{ item.name }}
      </label>
    </div>
  </div>
</template>

<script>
import { abstractField, slugify } from 'vue-form-generator'
const isArray = (obj) => Object.prototype.toString.call(obj) === '[object Array]'
export default {
  mixins: [ abstractField ],
  computed: {
    items () {
      let values = this.schema.values
      if (typeof values === 'function') {
        return values.apply(this, [this.model, this.schema])
      } else {
        return values
      }
    }
  },
  methods: {
    getInputName (item) {
      if (this.schema && this.schema.inputName && this.schema.inputName.length > 0) {
        return slugify(this.schema.inputName + '_' + this.item.value)
      }
      return slugify(this.item.value)
    },
    handleChange (event) {
      let tempValue = isArray(this.value) ? this.value.concat() : []
      if (event.target.checked) {
        tempValue = [...tempValue, event.target.value]
      } else {
        tempValue = tempValue.filter(v => v !== event.target.value)
      }
      const values = new Set(this.items.map(item => item.value))
      this.value = Array.from(new Set([...tempValue].filter(v => values.has(v))))
    }
  }
}
</script>

<style lang="sass">
</style>
