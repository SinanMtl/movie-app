<template>
  <div class="card">
    <img :src="poster" alt="Movie">
    <span class="card-name" v-html="title"></span>
  </div>
</template>

<script>
export default {
  props: {
    poster: { type: String, default: "" },
    name: { type: String, default: "" },
    highlight: { type: String, default: "" }
  },
  computed: {
    title() {
      if (!this.highlight) return this.name;
      return this.name.replace(new RegExp(`(${this.highlight})`, "gi"), "<mark>$1</mark>")
    }
  }
}
</script>

<style>
.card {
  padding: 8px;
  border-radius: 12px;
  backdrop-filter: blur(40px);
  background-color: rgba(32, 40, 62, 0.8);
}

.card .card-name {
  display: block;
  padding: 8px;
  margin-top: 16px;
  margin-bottom: 8px;
  color: white;
  font-weight: 600;
}

.card img {
  height: 400px;
  max-width: 100%;
  object-fit: cover;
  border-radius: 8px;
}
</style>

