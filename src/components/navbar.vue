<template>
  <nav class="gallery-nav">
    <div class="app-logo">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN2HmvUNeIh7JMikSBZ3v5bV3T8sumpWJ3NOI0SyieSEeMVaWsKTx_qF2Bixk75omg8Fw&usqp=CAU"
        alt=""
      />
      <h2>GalleryApp</h2>
    </div>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="">Gallery</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</template>

<script></script>

<style scoped>
.app-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.app-logo img {
  width: 20px;
  height: 20px;
}
.app-logo h2 {
  color: #fff;
}
.gallery-nav {
  background-color: #ff731f;
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gallery-nav ul {
  list-style-type: none;
  display: flex;
  gap: 20px;
  font-size: 20px;
  font-weight: bold;
}
.gallery-nav ul a {
  color: #fff;
}
</style>