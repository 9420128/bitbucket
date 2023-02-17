<template>
<div class="footer__info-item">
  <img v-if="icon === 'phone'" src="../assets/img/phone.svg">
  <img v-else src="../assets/img/address.svg">
  <span>{{name}}</span>
</div>
</template>

<script>
export default {
  name: "FooterInfoItem",
  props: {
    name: {
      type: String
    },
    icon: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.footer__info-item{
  display: flex;
  color: #555555;
  margin-left: 50px;

  >span{
    font-size: 14px;
    margin-left: 9px;
  }
}
</style>