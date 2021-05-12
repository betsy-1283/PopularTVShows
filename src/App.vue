<template>
  <div id="app">
    <Navigation />
    <div class="container">
      <div class="row">
        <Card
          v-for="movie in movies"
          :key="movie.id"
          v-bind:movieobj="movie"
          class="col-12 col-md-3"
        ></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Card from "./components/Card.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Navigation,
    Card,
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          title: "matrix",
          overview: "A movie about the matrix",
          poster_path: "matrix.jpg",
        },
        {
          id: 2,
          title: "top gun",
          overview: "A movie about fighter pilots",
          poster_path: "topgun.jpg",
        },
      ],
    };
  },
  mounted() {
    axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=8aca17faf6bf476ec035b28e2de1f418&language=en-US&page=1"
    )
    .then((response) => {
      
      this.movies = response.data.results;
      
      
    })
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
