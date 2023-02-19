<template>
<main class="main">
  <div class="container">
    <h1>{{name}}</h1>
    <div class="grid">
      <div class="grid__item" v-for="item in GOODS" :key="item.id">
        <Card
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

<style lang="scss">
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

.grid{
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0 -32px;
  padding: 0;

  &__item{
    width: 25%;
    box-sizing: border-box;
    margin-bottom: 32px;
    padding-left: 32px;
  }
}
</style>