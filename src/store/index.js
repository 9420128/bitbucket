import { createStore } from 'vuex'

export default createStore({
  state: {
    goods: {
      1: {
        id: 1,
        img: 'img-1.png',
        name: 'Урок анатомии',
        author: 'Рембрандт',
        status: 'Продана на аукционе',
        sale: '',
        price: ''
      },
      2: {
        id: 2,
        img: 'img-2.png',
        name: 'Сотворение Адама',
        author: 'Микеланджело',
        status: '',
        sale: '6000000',
        price: '5000000'
      },
      3: {
        id: 3,
        img: 'img-3.png',
        name: 'Тайная вечеря',
        author: 'Леонардо да Винчи',
        status: '',
        sale: '',
        price: '3000000'
      },
      4: {
        id: 4,
        img: 'img-4.png',
        name: 'Рождение Венеры',
        author: 'Сандро Боттичелли',
        status: '',
        sale: '2000000',
        price: '1000000'
      },
    },
    storage: []
  },
  getters: {
    GOODS(state) {
      return state.goods
    },
    STORAGE(state) {
      if (localStorage.getItem('idGoodsCart')) {
        try {
          return JSON.parse(localStorage.getItem('idGoodsCart'));
        } catch(e) {
          localStorage.removeItem('idGoodsCart');
          return []
        }
      }
      return state.storage
    },
  },
})
