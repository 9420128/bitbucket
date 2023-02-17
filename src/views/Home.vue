<template>
  <Header/>
  <Main/>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header_.vue'
import Main from "@/components/Main_.vue";
import Footer from "@/components/Footer_.vue";

export default {
  name: 'Home',
  components: {
    Footer,
    Main,
    Header
  }
}
</script>
