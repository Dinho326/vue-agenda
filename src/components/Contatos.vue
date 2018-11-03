<template>
  <div>
    <md-field>
        <label>Buscar</label>
        <md-input id ="buscar" v-model="filtro" @keyup.enter.native="ContatosComFiltro()" placeholder="Buscar" ></md-input>
    </md-field>

    <md-list v-for="contato in ContatosComFiltro" :key="contato.id">
        <meu-card @deletar="remover(contato)" :contato="contato"></meu-card>
    </md-list>
    <form>
       <md-snackbar :md-active.sync="deleteMsg">{{msg}}</md-snackbar>
    </form>
  </div>
</template>

<script>
import Card from './Card/card-phone.vue'
import ContatoService from './domain/ContatoService'
export default {
  name: 'Contato',

  components: {
    'meu-card': Card
  },
  data: () => ({
    filtro: '',
    titulo: 'Contatos',
    contatos: [],
    deleteMsg: false,
    msg:'',
  }),

  methods: {
    remover(contato) {
      this.service
       .apagar(contato.id)
       .then(()=> {
          this.msg = 'Contato deletado com sucesso!';
          this.deleteMsg = true;
          let indice = this.contatos.indexOf(contato);
          this.contatos.splice(indice, 1);
        }, err => {
          console.log(err);
          this.msg = 'Problema ao tentar apagar o registro!';
          this.deleteMsg = true;
        });
    }
  },
  computed: {
    ContatosComFiltro() {
      if(this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.contatos.filter(contato => exp.test(contato.name))
      }else {
        return this.contatos;
      }
    }
  },

  created() {
    this.service = new ContatoService(this.$resource);
    this.service
      .listar()
      .then(contatos => this.contatos = contatos, err => console.log(err));
  }
}
</script>

<style scoped>

.md-list {
    width: 350px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
    background-color: #FAFAFA;
  }
</style>
