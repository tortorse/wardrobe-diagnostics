<template>
  <div>
    <h2>{{ question.content }}</h2>
    <a-radio-group v-model="value" @change="onChange">
      <a-radio :style="radioStyle" :value="option.key" v-for="option in question.options" :key="option.key">{{ option.content }}</a-radio>
    </a-radio-group>
    <div v-show="result">
      <a-alert :message="result" type="warning" />
    </div>
  </div>
</template>
<script>
import quiz from './data.js'
export default {
  data () {
    return {
      current: 0,
      value: undefined,
      result: undefined,
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px'
      }
    }
  },
  computed: {
    question () {
      return quiz.questions[this.current]
    }
  },
  methods: {
    onChange (e) {
      if (this.question.options[this.value].next) {
        this.current = this.question.options[this.value].next
      } else {
        this.result = this.question.options[this.value].result
      }
    }
  }
}
</script>
