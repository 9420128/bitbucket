<template>
  <router-link to="/" class="logo">
    <img v-if="!name" src="../assets/img/logo.svg" alt="">
    <img v-else src="../assets/img/logo-footer.svg" alt="">
  </router-link>
</template>

<script>
export default {
  name: "Logo",
  props: {
    name: {
      type: String,
    }
  }
}
</script>

<style>
.logo{
  display: block;
  width: 48px;
  height: 48px;
}
</style>