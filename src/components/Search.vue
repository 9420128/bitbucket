<template>
<form class="search">
  <input class="search__input" type="text" placeholder="Поиск по названию картины">
  <Button text="Найти" classButton="search__button" />
</form>
</template>

<script>
import Button from "@/components/Button_.vue";
export default {
  name: "Search",
  components: {Button}
}
</script>

<style lang="scss">
.search{
  position: relative;
  margin-left: auto;
  height: 48px;
  width: 416px;
  //padding-left: 48px;

  &__input{
    border: 1px solid #E1E1E1;
    height: 100%;
    width: 100%;
    background-color: inherit;
    color: #9F9F9F;
    padding: 0 138px 0 16px;
    font-weight: 400;
  }

  &__button{
    position: absolute;
    width: 122px;
    top: 0;
    right: 0;
    bottom: 0;
  }
}

input{
  outline: 0;
  outline-offset: 0;
}

input:active, input:hover, input:focus {
  border: 1px solid #B5B5B5;
  color: #343030;
}
</style>