<template>
<main class="main">
  <div class="container">
    <h1>{{name}}</h1>
    <div class="card__wrap">
      <Card
          v-for="item in GOODS" :key="item.id"
          :id="item.id"
          :img="item.img"
          :name="item.name"
          :author="item.author"
          :status="item.status"
          :sale="item.sale"
          :price="item.price"
          :cartFlag="storageCartRender(item.id)"
      />
    </div>
  </div>
</main>
</template>

<script>
import Card from "@/components/Card.vue";
import {mapGetters} from "vuex";

export default {
  name: "Main_",
  components: {Card},
  data: () => ({
    name: 'Картины эпохи Возрождения',
  }),
  computed: {
    ...mapGetters(['GOODS']),
    ...mapGetters(['STORAGE']),
  },
  methods: {
    storageCartRender(id){
      return this.STORAGE.includes(String(id))
    }
  }
}
</script>

<style>
.main{
  flex: 1 0 auto;
}

h1{
  display: block;
  margin-top: 45px;
  margin-bottom: 39px;
  font-family: 'Merriweather', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #343030;
}

.card__wrap{
  display: flex;
  width: 100%;
  gap: 32px;
  flex-direction: row-reverse;
}
</style>