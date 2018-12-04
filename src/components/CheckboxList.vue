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
          @change="handleChange"
        />
        {{item.name}}
      </label>
      <div class="invalid-feedback">Example invalid feedback text</div>
    </div>
  </div>
</template>

<script>
import { abstractField, slugify } from 'vue-form-generator'

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
      if (event.target.checked) {
        this.value = [...this.value, event.target.value]
      } else {
        this.value = this.value.filter(v => v !== event.target.value)
      }
      this.value = [...new Set(this.value)]
    }
  }
}
</script>

<style lang="sass">
</style>
