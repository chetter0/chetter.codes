<template>
  <div id="app">
    <cNav />
    <router-view />
    <cFooter />
  </div>
</template>
<script>
import cNav from "@/components/common/cNav";
import cFooter from "@/components/common/cFooter";

export default {
  components: {
    cNav,
    cFooter
  },
  methods: {
    freshDot() {
      var app = document.getElementById("app");
      var star = document.createElement("div");
      star.classList.add("star");
      star.style.top = window.innerHeight * Math.random() + "px";
      star.style.left = window.innerWidth * Math.random() + "px";
      var size = Math.floor(Math.random() * 4) + 1; //This picks a size between 1 and 4 inclusive
      star.style.height = size + "px";
      star.style.width = size + "px";
      app.appendChild(star);
    }
  },
  mounted: function() {
    for (var x = 0; x < 400; x++) {
      this.freshDot();
    }
  }
};
</script>
<style>
.star {
  background-color: white;
  position: fixed;
  border-radius: 50%;
}
</style>
