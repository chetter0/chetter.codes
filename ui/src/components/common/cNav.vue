<template>
  <div class="nav-bar">
    <div class="nav-button hoverable" @click="$router.push({ name: 'Hello' })">
      <span class="nav-button-text">Home</span>
    </div>
    <div class="nav-button hoverable" @click="$router.push({ name: 'About' })">
      <span class="nav-button-text">About</span>
    </div>
    <div class="nav-button hoverable" @click="$router.push({ name: 'Blog' })">
      <span class="nav-button-text">Blog</span>
    </div>
    <div class="nav-button float-right">
      <span class="nav-button-text">Chetter.Codes</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "cNav",
  computed: {
    isMobileDevice: function() {
      return window.innerWidth < 800;
    }
  }
};
</script>

<style scoped>
.nav-bar {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: rgba(129, 7, 156, 1);
  color: white;
  border-bottom: 1px black;
  position: relative;
  z-index: 10;
}
.nav-button {
  line-height: 25px;
  border-radius: 10px;
  display: inline;
  text-align: center;
  padding: 5px;
  margin-right: 5px;
}
.nav-button.hoverable:hover {
  background-color: rgba(93, 9, 121, 1);
}
.nav-button-text {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}
</style>
