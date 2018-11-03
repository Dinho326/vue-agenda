<template>
<div @dblclick= "visivel = !visivel"  :id="contato.id">
    <md-list-item md-expanded=show>
        <md-card md-with-hover>
              <md-card-header>
                  <md-card-header-text>
                    <md-avatar>
                      <md-icon>person</md-icon>
                    </md-avatar>
                    <div class="md-title">{{ contato.name }}</div>
                  </md-card-header-text>
                <router-link :to="{name: 'alterar', params: {id: contato.id }}">
                  <md-button class="md-icon-button">
                    <md-icon>edit</md-icon>
                  </md-button>
                </router-link>
                <md-button class="md-icon-button" @click="apagar()">
                  <md-icon>delete_forever</md-icon>
                </md-button>
              </md-card-header>

            <transition name="painel-fade">
              <md-card-content v-show="visivel">
                <md-avatar>
                  <md-icon>phone</md-icon>
                </md-avatar>
                {{ contato.number }}
                <md-button class="md-icon-button md-list-action">
                  <md-icon>sms</md-icon>
                </md-button>
              </md-card-content>
            </transition>
        </md-card>
      </md-list-item>
    </div>
</template>
<script>
export default {
  name: 'Card',
  props: ['contato'],

  data: () => ({
    deleteMsg: false,
    msg:'',
    visivel:true
  }),

  methods: {
    apagar() {
      if(confirm('Deseja apagar esse registro ?')) {
          this.$emit('deletar');
      }
    }
  },
}
</script>

<style scoped>
 .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }

 .painel-fade-enter, .painel-fade-leave-active{
     opacity: 0;
 }

 .painel-fade-enter-active, .painel-fade-leave-active{
     transition: opacity .4s;
 }
</style>


