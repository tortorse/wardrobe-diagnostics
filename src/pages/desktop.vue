<template>
  <a-row type="flex" align="top" justify="center" style="padding-top:100px;">
    <a-col :xs="22" :sm="22" :md="12" :lg="12" :xl="12">
      <a-card :bordered="false">
      <div slot="title">{{ question.content }}</div>
      <a-radio-group v-model="value" @change="onChange">
        <a-radio :style="radioStyle" :value="option.key" :disabled="disabled" v-for="option in question.options" :key="option.key">{{ option.content }}</a-radio>
      </a-radio-group>
      <div v-show="result" style="margin-top:24px;text-align:center">
        <a-alert :message="result" type="warning" />
        <a-button size="large" type="primary" style="margin-top: 16px" @click="resetQuiz">重新测试</a-button>
      </div>
      </a-card>
    </a-col>
  </a-row>
</template>
<script>
import quiz from './data.js'
export default {
  data () {
    return {
      value: undefined,
      result: undefined,
      disabled: false,
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px'
      }
    }
  },
  computed: {
    current () {
      return this.$route.query.q ? this.$route.query.q : 0
    },
    question () {
      return quiz.questions[this.current]
    }
  },
  watch: {
    $route () {
      this.value = null
      this.result = null
      this.disabled = false
    }
  },
  methods: {
    onChange (e) {
      let next = this.question.options[this.value].next
      let result = this.question.options[this.value].result
      if (next) {
        this.disabled = true
        setTimeout(() => {
          this.$router.push({name: 'desktop', query: {q: next}})
        }, 300)
      } else {
        this.disabled = true
        this.result = result
      }
    },
    resetQuiz () {
      this.$router.push({name: 'desktop'})
    }
  }
}
</script>
