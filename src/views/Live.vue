<template>
  <v-app id="inspire">

    <Sidebar></Sidebar>

    <div class="row">
      <div class="col-md-6 col-xl-3" v-for="stats in statsCards" :key="stats.title">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{stats.title}}</p>
            {{stats.value}}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-container>
            <div id="app">
              <v-card max-width="500" max-height="500" class="mx-auto">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="headline">Live Sensor</v-list-item-title>
                    <v-list-item-subtitle>These are the values of sensor with id:</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <p> PM10: {{ info.data[0].pm10 }} </p>
                <p> PM2.5: {{ info.data[0].pm2_5 }} </p>
                <p> Temperature: {{ info.data[0].temperature }} </p>
                <p> Pressure: {{ info.data[0].pressure }} </p>
                <p> Humidity: {{ info.data[0].humidity }} </p>
                <p> Time: {{ info.data[0].timestamp }} </p>
                
              </v-card>
            </div>
          </v-container>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; Particula 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import Sidebar from "../components/Sidebar";
import axios from "axios";
// import vuetify from '@/plugins/vuetify'

export default {
  name: "App",
  el: "#app",
  components: {
    Sidebar
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    info: null
  }),
  created() {
    this.$vuetify.theme.dark = false;
  },
  mounted() {
    this.getAPI();
    this.intervalFetchData();
  },
  methods: {
    getAPI: function() {
      axios
        .get("https://virtserver.swaggerhub.com/sillevl/Particula/0.1/measurements/3fa85f64-5717-4562-b3fc-2c963f66afa6?period=24h&properties=pm10")
        .then(response => (this.info = response));
    },
    intervalFetchData: function() {
      setInterval(() => {
        this.getAPI();
      }, 2000);
    }
  }
};
</script>
<script>
import { StatsCard, ChartCard } from "@/components/index";
import Chartist from 'chartist';
export default {
  components: {
    StatsCard,
    ChartCard
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  data() {
    return {
      statsCards: [
        {
          type: "warning",
          icon: "ti-shine",
          title: "Temperature",
          value: info.data[0].pm10,
        },
        {
          type: "success",
          icon: "ti-paint-bucket",
          title: "humidity",
          value: "60%",
        },
        {
          type: "danger",
          icon: "ti-vector",
          title: "pressure",
          value: "1 at",
        },
        {
          type: "info",
          icon: "ti-line-dotted",
          title: "PM 2.5",
          value: "10 ppm",
        },
        {
          type: "info",
          icon: "ti-more",
          title: "PM 10",
          value: "100ppm",
        }
      ],
      usersChart: {
        data: {
          labels: [
            "9:00AM",
            "12:00AM",
            "3:00PM",
            "6:00PM",
            "9:00PM",
            "12:00PM",
            "3:00AM",
            "6:00AM"
          ],
          series: [
            [287, 385, 490, 562, 594, 626, 698, 895, 952],
            [67, 152, 193, 240, 387, 435, 535, 642, 744],
            [23, 113, 67, 108, 190, 239, 307, 410, 410]
          ]
        },
        options: {
          low: 0,
          high: 1000,
          showArea: true,
          height: "245px",
          axisX: {
            showGrid: false
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
          }),
          showLine: true,
          showPoint: false
        }
      },
      activityChart: {
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          series: [
            [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
            [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
          ]
        },
        options: {
          seriesBarDistance: 10,
          axisX: {
            showGrid: false
          },
          height: "245px"
        }
      },
      preferencesChart: {
        data: {
          labels: ["62%", "32%", "6%"],
          series: [62, 32, 6]
        },
        options: {}
      }
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
