<template>
  <div class="footer">
    <div class="footer-container">
      <span>Designed by Christie Etter</span>
    </div>
    <img class="footer-trees" src="..\..\assets\trees.png" />
  </div>
</template>
<script>
export default {
  name: "cFooter"
};
</script>
<style scoped>
.footer {
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0px;
}
.footer-container {
  position: relative;
  vertical-align: middle;
  line-height: 1em;
  font-size: 1em;
  display: table;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.37);
  border-radius: 15px;
  bottom: 5px;
  padding: 5px 10px;
  margin: auto;
  color: white;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}
.footer-trees {
  height: 600px;
  bottom: -200px;
  position: fixed;
  left: -85px;
  z-index: 5;
}
</style>