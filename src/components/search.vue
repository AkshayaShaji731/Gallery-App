<template>
  <form @submit.prevent="search">
    <input type="text" placeholder="Search" v-model="searchInput"/>
  </form>
</template> 
<script>
export default {
  data() {
    return {
      searchInput:""
    };
  },
  methods: {
    search() {
      if (this.searchInput== "") {
        console.log("empty");
      }
      else{
        console.log(this.searchInput)
      }
    },
  },
};
</script>
    <style>
body {
  background-color: #111827;
}

input {
  padding: 15px;
  background-color: #ff731f;
  border: none;
  border-radius: 4px;
}

input::placeholder {
  color: #fff;
  font-weight: 500;
  font-size: 16px;
}
</style>