<template>
  <router-view/>
</template>

<style lang="scss">
body,
form{
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Merriweather', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //color: #2c3e50;
  background-color: #f6f3f3;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 14px;
}

.container {
  display: block;
  margin: 0 auto;
  max-width: 1216px;
}

.button, .search__input {
  overflow: visible;
  border-radius: 0;
  font-family: 'Merriweather', serif;
  font-size: 14px;
  line-height: 48px;
  box-sizing: border-box;
  transition: .3s;
}

a {
  transition: .3s;
}
</style>
