<template>
  <div id="app">
    <router-view/>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      APIkey:"ab277e8ff238b65faf642090c9b2d642",
      City:"Dallas",
    };
  },
  created() {
    this.getCurrentWeather();
  },
  methods: {
    getCurrentWeather() {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.City}&units=imperial&APPID=${this.APIkey}`)
      .then((res) => {
        console.log(res.data);
      });
    },
  },
};  
  
 
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Courier New', Courier, monospace;
}

</style>
