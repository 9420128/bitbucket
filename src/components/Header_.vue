<template>
   <header class="header">
     <div class="container">
       <div class="header__wrap">
         <Logo/>
         <Menu/>
         <Search/>
       </div>
     </div>
   </header>
</template>

<script>
import Menu from "@/components/Menu_.vue";
import Search from "@/components/Search.vue";
import Logo from "@/components/Logo.vue";

export default {
  name: 'Header_',
  components: {Logo, Search, Menu},
}
</script>

<style lang="scss">
.header {
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #E1E1E1;
  flex: 0 0 auto;

  &__wrap{
    display: flex;
    align-items: center;
    height: 96px;
    color: #343030;
  }
}
</style>
