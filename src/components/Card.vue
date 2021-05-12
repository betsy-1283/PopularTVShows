<template>
  <div>
    <div class="card" style="width: 18rem;">
      <!-- <img :src="require(`/src/assets/${obj.poster_path}`)" class="card-img-top" alt="..."> -->
      <img :src="`https://image.tmdb.org/t/p/original${movieobj.poster_path}`" class="card-img-top" alt=" ">
      <div class="card-body">
        <h5 class="card-title">{{ movieobj.title }}</h5>
        <p class="card-text">
          {{ movieobj.overview }}
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["movieobj"],
};
</script>
