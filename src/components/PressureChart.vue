<template>
  <div
    class="container"
    style="margin-bottom: 5vh;"
  >
    <line-chart
      v-if="loaded"
      height="60%"
      :chartdata="chartdata"
    />
  </div>
</template>

<script>
import LineChart from './Chart.vue'
import axios from "axios"

export default {
  name: 'LineChartContainer',
  props: ['guid','period'],
  components: { LineChart },
  data: () => ({
    loaded: true,
    API_url_measurements: "https://develop.particula.devbitapp.be/measurements/",
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
          .get(`${this.API_url_measurements}${this.$props.guid}?period=24h&properties=pressure`)
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
