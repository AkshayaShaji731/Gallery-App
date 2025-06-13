<template>
  <section class="main-container">
    <section  v-for="post in postPhoto" :key="post.id" class="card">
      <div class="img-container">
        <img src="https://fastly.picsum.photos/id/488/200/200.jpg?hmac=V8mvdG1ON09kNw80-qS00BSFq5gGhqRYoYPJftrsYA8"
          alt="img"
        />
      </div>
      <div class="text-container">
        <span class="title">{{ post.title }}</span>
        <span class="id">{{ post.id }}</span>
      </div>
    </section>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      postPhoto: [],
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => (this.postPhoto = response.data))
  },
};
</script>

<style>
.main-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-inline: 16px;
  gap: 16px;
  margin-top: 30px;
}
.card {
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(31 41 55);
  border-radius: 4px;
}
.img-container {
  padding-top: 8px;
  border-bottom: 2px solid rgb(31 41 55);
  max-width: 400px;
}
.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.text-container {
  display: flex;
  flex-direction: column;
  padding: 12px;
  text-align: center;
}
.title {
  font-weight: 500;
  color: rgba(229 231 235);
  font-size: 14px;
  line-height: 20px;
  text-transform: capitalize;
}
.id {
  color: rgb(156, 163, 175);
  font-size: 12px;
  line-height: 16px;
}

@media screen and (min-width:768px) {
    .main-container{
        grid-template-columns:repeat(3,1fr);
    }
}
@media screen and (min-width:1024px) {
    .main-container{
        grid-template-columns:repeat(4,1fr);
    }
}
</style>