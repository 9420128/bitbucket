<template>
  <nav class="menu">
    <router-link
        class="menu__item"
        v-for="item in menu"
        :key="item.text"
        :to="item.url"
    >
      {{item.text}}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Menu_",
  data: () => ({
    menu: [
      {url: '', text: 'Каталог'},
      {url: '', text: 'Доставка'},
      {url: '', text: 'Оплата'},
      {url: '', text: 'Контакты'},
      {url: '', text: 'О галерее'},
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