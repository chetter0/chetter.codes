<template>
  <div class="view">
    <div class="hello-bulletin-outer">
      <div class="hello-bulletin-inner">
        <h1>404</h1>
        <h2>uh oh! Looks like you might be lost..</h2>
        <span @click="$router.push({ name: 'Hello' })">Head on home!</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cNotFound"
};
</script>
