<template>
<div class="card" :class="{card__disable : status}">
  <router-link to="/" class="card__link">
    <img class="card__img" :src="require('../assets/img/card/' + img)" :alt="name">
  </router-link>
  <h2 class="card__heading">«{{name}}»<br>{{author}}</h2>
  <div v-if="status" class="price__status">
    {{ status }}
  </div>
  <div v-else class="card__price">
    <div class="price">
      <div v-if="sale" class="price__sale">
        {{ priceFormatter(sale) }} $
      </div>
      <div v-if="price" class="price__sum">
        {{ priceFormatter(price) }} $
      </div>
    </div>
    <Button v-if="!cartFlag" @click.prevent="submit" :id="id" :text="btnText"/>
    <Button v-else :id="id" classButton="button__active" :text="btnTextAddCart"/>
  </div>
</div>
</template>

<script>
import Button from "@/components/Button_.vue";
import {mapGetters} from "vuex";

export default {
  name: "Card",
  components: {Button},
  data: () => ({
    btnText: 'Купить',
    btnTextAddCart: '<span class="button__icon"><svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M14.5315 1.80937L5.63341 11.237L1.34814 7.19237" stroke="#F4F6F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</svg></span> В корзине',
  }),
  props: {
    id: Number,
    img: String,
    name: String,
    author: String,
    status: String,
    sale: String,
    price: String,
    cartFlag: Boolean
  },
  computed: {
    ...mapGetters(['STORAGE']),
  },

  methods: {
    priceFormatter(sum){
      return new Intl.NumberFormat('ru-RU').format(sum)
    },

    submit(e){
      const id = e.target.id

      if(!id) {
        console.error('Не найден Id товара')
        return
      }

      this.btnText = 'Отправка...'

      this.getPosts(e.target)
      this.setStorage(id)
    },

    setStorage(id){
      this.STORAGE.push(id)
      const parsed = JSON.stringify(this.STORAGE);
      localStorage.setItem('idGoodsCart', parsed);
    },

    getPosts(btn) {
      const html = this.btnTextAddCart

      fetch('https://jsonplaceholder.typicode.com/posts/' + btn.id)
          .then(response => response.json())
          .then(function(data){
            btn.innerHTML = html
            btn.classList.add('button__active')
            console.log(data)
          })
    }
  }
}
</script>

<style lang="scss">
.card{
  max-width: 280px;
  height: 328px;
  border: 1px solid #E1E1E1;
  //border-radius: 4px 4px 0 0;

  &__disable{
    opacity: .5;
  }

  &__link{
    border-bottom: 1px solid #E7E7E7;
  }

  &__img{
    display: block;
    width: 100%;
    height: auto;
  }

  &__heading{
    margin: 0;
    padding: 20px 24px 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #343030;
  }

  &__price{
    padding: 24px;
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }
}

.price{
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__status{
    padding: 24px;
    font-size: 16px;
    font-weight: 700;
    color: #343030;
    line-height: 48px;
  }

  &__sale{
    font-size: 14px;
    font-weight: 300;
    text-decoration-line: line-through;
    color: #A0A0A0;
  }

  &__sum{
    font-size: 16px;
    font-weight: 700;
    color: #343030;
  }
}
</style>