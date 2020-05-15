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
import axios from "axios";

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
          label: 'Humidity',
          data: [],
          backgroundColor:
                    'rgba(0, 0, 132, 0.2)',
                borderColor:
                    'rgba(0, 0, 0, 1)',
                borderWidth: 1
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
          .get(`${this.API_url_measurements}${this.$props.guid}?period=24h&properties=humidity`)
          .then(response => (this.info = response));
        
        for(let i=0; i < Object.keys(this.info.data).length; i++) {
          this.chartdata.datasets[0].data.push(this.info.data[i].humidity)
          this.chartdata.labels.push( this.info.data[i].time )
        }
      this.loaded = true
    }
  }
}
</script>
