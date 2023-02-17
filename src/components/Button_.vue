<template>
<button class="button" :class="classButton" :id="id" v-html="text"></button>
</template>

<script>
export default {
  name: "Button_",
  props: {
    text: {
      type: String,
      default: 'Купить',
    },
    classButton: {
      type: String,
      default: ''
    },
    id: Number
  },
}
</script>

<style lang="scss">
.button{
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #403432;
  color: white;
  font-weight: 700;
  border: none;
  min-width: 112px;

  &:hover{
    background-color: #776763;
  }

  &__icon{
    margin-right: 7px;
  }

  &__active{
    background-color: #5B3A32;
  }
}

button:not(:disabled) {
  cursor: pointer
}

button:disabled {
  opacity: .2
}
</style>