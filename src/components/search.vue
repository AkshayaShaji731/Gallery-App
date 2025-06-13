<template>
  <section class="main">
    <div class="search">
      <form @submit.prevent="search">
        <input type="text" placeholder="Search" v-model="searchInput" />
      </form>
    </div>
  </section>
</template> 
<script>
export default {
  data() {
    return {
      post: "",
    };
  },
  method: {
    search() {
      let searchInput = "";
      if (searchInput === "") {
        console.log("empty");
      }
    },
  },
};
</script>
    <style>
body {
  background-color: #111827;
}

.search input {
  padding: 15px;
  background-color: #ff731f;
  border: none;
  border-radius: 4px;
}

.search input::placeholder {
  color: #fff;
  font-weight: 500;
  font-size: 16px;
}
</style>