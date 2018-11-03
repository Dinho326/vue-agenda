<template>
<div>
  <header>
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">{{ titulo }}</span>

      <meu-menu></meu-menu>

    </md-toolbar>
    <md-drawer :md-active.sync="showNavigation">
	    <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Agenda</span>
      </md-toolbar>
        <md-list>
          <md-list-item>
            <md-icon>list</md-icon>
            <span class="md-list-item-text">Listar Contatos</span>
          </md-list-item>

          <md-list-item>
            <md-icon>add_box</md-icon>
            <span class="md-list-item-text">Adicionar Contato</span>
          </md-list-item>
        </md-list>
	    </md-drawer>

  </header>
</div>
</template>



<script>
import Menu from './Menu.vue';
export default {
  components: {
    'meu-menu': Menu
  },
  name: 'Header',
  props: ["titulo"],

  data() {
    return {
      showNavigation: false
    };
  }
};
</script>

<style scoped>
</style>
