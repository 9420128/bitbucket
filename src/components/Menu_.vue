<template>
  <nav class="menu">
    <a href="#" class="menu__item">Каталог</a>
    <a href="#" class="menu__item">Доставка</a>
    <a href="#" class="menu__item">Оплата</a>
    <a href="#" class="menu__item">Контакты</a>
    <a href="#" class="menu__item">О галерее</a>
  </nav>
</template>

<script>
export default {
  name: "Menu_"
}
</script>

<style lang="scss">
.menu{
  display: flex;

  &__item{
    margin-left: 48px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    text-decoration: none;
    color: inherit;

    &:hover{
      color: #000;
    }
  }
}
</style>