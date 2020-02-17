<template>
  <div class="container">
    <line-chart
      v-if="loaded"
      :chartdata="chartdata"
      />
  </div>
</template>

<script>
import LineChart from './Chart.vue'

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
    loaded: true,
    chartdata: { 
      labels: [],
      datasets: [
        {
          data: []
        }
      ] 
    }
  }),
  async mounted () {
    this.loaded = false
    await this.getData()
  },
  methods: {
    async getData() {
      const response = await fetch('example.csv');
      const csv = await response.text();

      const table = csv.split('\n').slice(1)
      table.forEach(row => {
        const columns = row.split(',')
        const year = Number(columns[0])
        // xvalues.push(year)
        const temp = Number(columns[1])
        // yvalues.push(parseFloat(temp) + 14)
        this.chartdata.datasets[0].data.push( temp )
        this.chartdata.labels.push( year )
        console.log({ x: temp, y: year })
      })

      this.loaded = true
    }
  }
}
</script>
