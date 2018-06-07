<template>
<div>
  <h2>为什么?</h2>
  <a-radio-group v-model="value" @change="onChange">
    <a-radio :style="radioStyle" :value="1">我并没有多少真正喜欢的衣服。我觉得已处理绝大多数衣服都很无聊、安全、可有可无</a-radio>
    <a-radio :style="radioStyle" :value="2">我不确定自己喜欢什么，但我希望能穿的更好看。</a-radio>
    <a-radio :style="radioStyle" :value="3">理论上，我知道自己喜欢什么，可一旦试穿，就觉得什么都不对劲</a-radio>
  </a-radio-group>
  <div v-show="result">
    {{ result }}
  </div>
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
      },
      result: false
    }
  },
  methods: {
    onChange (e) {
      if (e.target.value === 1) {
        this.result = '尝试跳出自己的舒适区，变得更有创意，并重新界定自己的个人风格。'
      } else if (e.target.value === 2) {
        this.result = '尝试收集海量灵感素材，找出自己喜欢那些样式、颜色和版型'
      } else if (e.target.value === 3) {
        this.result = '尝试找出最让自己感觉自信的服装类型，练习把个人风格外化为自己喜欢穿着的服饰'
      } else {
        this.result = false
      }
    }
  }
}
</script>
