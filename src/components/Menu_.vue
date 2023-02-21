<template>
  <nav class="menu">
    <a v-for="item in menu" :key="item.text" :href="'/' + item.url" class="menu__item">{{item.text}}</a>
  </nav>
</template>

<script>
export default {
  name: "Menu_",
  data: () => ({
    menu: [
      {url: 'catalog', text: 'Каталог'},
      {url: 'delivery', text: 'Доставка'},
      {url: 'pay', text: 'Оплата'},
      {url: 'contacts', text: 'Контакты'},
      {url: 'about', text: 'О галерее'},
    ]
  })
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