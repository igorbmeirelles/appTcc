<template>
  <v-container
    class="d-flex align-center justify-center flex-column"
    fill-height
  >
    <h2>Gráfico de acessos</h2>
    <apexchart
      ref="chart"
      width="500"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <h2>Total de acessos - {{ total }}</h2>
  </v-container>
</template>

<script>
import { fbCollection } from "../data/db";
export default {
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [],
        },
      },
      series: [],
      total: 0,
    };
  },

  mounted() {
    fbCollection("acessos").then((c) => {
      const obj = {};
      let dataArray = [];
      let dataArrayY = [];
      let total = 0;
      c.forEach((d) => {
        if (obj[d.data]) {
          obj[d.data] = obj[d.data] + 1;
        } else {
          obj[d.data] = 1;
        }
      });

      for (const key in obj) {
        dataArray.push({
          day: key,
          quantity: obj[key],
        });
        total = total + obj[key];
      }

      this.total = total;

      dataArray = dataArray.sort((a, b) => {
        const dateA = a.day.split("/");
        const dateB = b.day.split("/");
        if (
          new Date(dateA[2], dateA[1], dateA[0]) >
          new Date(dateB[2], dateB[1], dateB[0])
        ) {
          return 1;
        } else if (
          new Date(dateA[2], dateA[1], dateA[0]) <
          new Date(dateB[2], dateB[1], dateB[0])
        ) {
          return -1;
        } else {
          return 0;
        }
      });
      console.log(dataArray);
      for (let i = 0; i < dataArray.length; i++) {
        dataArrayY.push(dataArray[i].quantity);
        this.chartOptions.xaxis.categories.push(dataArray[i].day);
      }

      this.series = [
        {
          data: dataArrayY,
        },
      ];
    });
  },
};
</script>
