<template>
  <div>
    <h2>你穿着不喜欢的衣服的频率有多少?</h2>
    <a-radio-group v-model="value" @change="onChange">
      <a-radio :style="radioStyle" :value="1">大多数时候</a-radio>
      <a-radio :style="radioStyle" :value="2">极少</a-radio>
    </a-radio-group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: undefined,
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px'
      }
    }
  },
  methods: {
    onChange (e) {
      if (e.target.value === 1) {
        this.$router.push({name: 'why'})
      }
    }
  }
}
</script>
