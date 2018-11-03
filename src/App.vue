<template>
  <div>
    <meu-header :titulo="title"></meu-header>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/header/header.vue'
export default {
  name: 'App',
  components: {
    'meu-header': Header
  },

  data () {
    return {
      title: 'Agenda'
    }
  }

}
</script>

<style scoped>
.page-enter, .page-leave-active{
     opacity: 0;
 }

 .page-enter-active, .page-leave-active{
     transition: opacity .2s;
 }
</style>
