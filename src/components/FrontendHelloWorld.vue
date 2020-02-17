<template>
  <div>
      <h1>{{ msg }}</h1>
      <MyChart/>
  </div>
</template>

<script>
import MyChart from './MyChart'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    MyChart
  }
}
</script>