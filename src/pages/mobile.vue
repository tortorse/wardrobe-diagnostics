<template>
  <div>
    <list :renderHeader="question.content">
      <radio-item :value="option.key" wrap :disabled="disabled" :Title="option.content" v-for="option in question.options" :key="option.key" v-model="value" @change="onChange"/>
    </list>
    <white-space size="lg" />
    <list v-show="result">
      <list-item wrap multipleLine>
        <icon slot="thumb" type="dislike" />
        {{ result }}
      </list-item>
      <list-item multipleLine>
        <Button type="primary" size="small" @onClick="resetQuiz">重新测试</Button>
      </list-item>
    </list>
  </div>
</template>
<script>
import quiz from './data.js'
import { List, Icon, ListItem, RadioItem, WhiteSpace, Button } from 'ui-nuclear-mobile'
export default {
  components: {
    RadioItem,
    List,
    Icon,
    ListItem,
    WhiteSpace,
    Button
  },
  data () {
    return {
      value: 999,
      result: undefined,
      disabled: false
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
      this.value = 999
      this.result = null
      this.disabled = false
    }
  },
  methods: {
    onChange (e) {
      let next = this.question.options[e].next
      let result = this.question.options[e].result
      if (next) {
        this.disabled = true
        setTimeout(() => {
          this.$router.push({name: 'mobile', query: {q: next}})
        }, 300)
      } else {
        this.disabled = true
        this.result = result
      }
    },
    resetQuiz () {
      this.$router.push({name: 'mobile'})
    }
  }
}
</script>
