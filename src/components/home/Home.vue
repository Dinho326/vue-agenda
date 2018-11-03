<template>
  <div id="lista-contatos">
    <lista-contatos></lista-contatos>
  </div>
</template>

<script>
import Contatos from '../Contatos.vue'
export default {

  name: 'App',
  components: {
    'lista-contatos':Contatos,
  },
}
</script>

<style scoped>

</style>
