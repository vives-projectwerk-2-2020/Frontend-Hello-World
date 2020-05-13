<template>
  <div
    class="container"
    style="margin-bottom: 5vh;"
  >
    <line-chart
      v-if="loaded"
      :chartdata="chartdata"
    />
  </div>
</template>

<script>
import LineChart from './Chart.vue'
import axios from "axios"

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
    loaded: true,
    options: {
      responsive: true,
      maintainAspectRatio: false
    },
    chartdata: { 
      labels: [],
      datasets: [
        {
          label: 'Pressure',
          data: [],
          options: {
            scales: {
              xAxes: [{
                type: 'time'
              }]
            }
          }
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
      await
        axios
          .get("https://develop.particula.devbitapp.be/measurements/bc41aa7d-9443-11ea-883d-02420a010064?period=24h&properties=pressure")
          .then(response => (this.info = response));
        
        for(let i=0; i < Object.keys(this.info.data).length; i++) {
          this.chartdata.datasets[0].data.push(this.info.data[i].pressure)
          this.chartdata.labels.push( this.info.data[i].time)
        }
      this.loaded = true
    }
  }
}
</script>
