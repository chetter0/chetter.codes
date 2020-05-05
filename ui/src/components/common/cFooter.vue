<template>
  <div class="footer">
    <div class="footer-container">FOOTER STUFF: Add links and tree images</div>
    <img class="footer-trees" src="..\..\assets\trees.png" />
  </div>
</template>
<script>
export default {
  name: "cFooter"
};
</script>
<style scoped>
.footer-container {
  position: absolute;
  z-index: 10;
  bottom: 20px;
  left: 10px;
  right: 10px;
  background-color: white;
  border-radius: 15px;
  margin: 0px 20px;
  padding: 5px 10px 30px;
  color: black;
}
.footer-trees {
  height: 600px;
  bottom: -200px;
  position: absolute;
  left: -85px;
  z-index: 5;
}
</style>