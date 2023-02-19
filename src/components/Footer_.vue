<template>
<footer class="footer">
  <div class="container">
    <div class="footer__wrap">
      <Logo name="footer"/>
      <Menu/>
      <div class="footer__info">
        <footer-info-item icon="phone" :name="phone"/>
        <footer-info-item icon="address" :name="address"/>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
import Menu from "@/components/Menu_.vue";
import FooterInfoItem from "@/components/FooterInfoItem.vue";
import Logo from "@/components/Logo.vue";

export default {
  name: "Footer_",
  components: {Logo, FooterInfoItem, Menu},
  data: () => ({
    phone: '+7 (495) 555-55-55',
    address: 'г. Москва, ул. Расплетина, 24'
  })
}
</script>

<style lang="scss">
.footer {
  padding: 0;
  margin: 0;
  background-color: #ECEAEA;
  flex: 0 0 auto;

  &__wrap{
    display: flex;
    align-items: center;
    height: 96px;
    color: #555555;
  }

  &__info{
    margin-left: auto;
    display: flex;
  }
}

@import "../assets/style/media";
</style>