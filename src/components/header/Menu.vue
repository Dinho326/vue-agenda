<template>
    <div id="menu" class="md-toolbar-section-end">
      <md-menu v-for="router in routes" :key="router.path">
          <md-button md-menu-trigger>
            <router-link :to="router.path" class="button-md">{{ router.title }} </router-link>
          </md-button>
        </md-menu>
      </div>
</template>

<script>
import { routes } from '../../routes.js';
export default {

  data() {
    return {
      routes : routes.filter(route => route.menu)
    }
  }
}
</script>

<style scoped>
.md-menu {
    margin: 24px;
  }
.button-md{
    color: white !important;
    text-decoration: none !important;
}
</style>
