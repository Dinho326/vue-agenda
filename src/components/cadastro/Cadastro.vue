<template>
  <div class="top-20">
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Contato</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('name')">
                <label for="first-name">Nome</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="contato.name" :disabled="sending" />
                <span class="md-error" v-if="!$v.contato.name.required">O nome é obrigatório</span>
                <span class="md-error" v-else-if="!$v.contato.name.minlength">O mínimo de caracteres para o campo nome é 3</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('number')">
                <label for="number">Número</label>
                <md-input name="number" id="number"  v-mask="'(##) #####-####'"  autocomplete="family-name" v-model="contato.number" :disabled="sending" />
                <span class="md-error" v-if="!$v.contato.number.required">O número do telefone é Obrigatório</span>
                <span class="md-error" v-else-if="!$v.contato.number.minlength">Verifique se não falta nenhum número</span>
              </md-field>
            </div>
          </div>
        </md-card-content>
        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button class="md-primary">
            <router-link to="/" class="voltar">Voltar </router-link>
          </md-button>
          <md-button type="submit" class="md-primary" :disabled="sending">Criar Contato</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="userSaved">Cadastro -> {{ nome }} realizado com sucesso!</md-snackbar>
    </form>
  </div>
</template>

<script>
  import Contato from '../domain/Contato'
  import ContatoService from '../domain/ContatoService'
  import { validationMixin } from 'vuelidate'
  import {
    required,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      contato: new Contato(),
      userSaved: false,
      sending: false,
      nome: null
    }),
    validations: {
      contato: {
        name: {
          required,
          minLength: minLength(3)
        },
        number: {
          required,
          minLength: minLength(14)
        },
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.contato[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.contato.name = null
        this.contato.number = null
      },
      saveUser () {
        this.sending = true
        let c = new Contato(this.contato.name, this.contato.number, this.contato.id);
        this.service.cadastrar(c)
        .then(window.setTimeout(() => {
          this.nome = `${this.contato.name}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500), err => console.log(err));
      },
      validateUser () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    },
    created () {
      this.service = new ContatoService(this.$resource);
       if(this.$route.params.id){
        this.service
          .buscar(this.$route.params.id)
          .then(contato => this.contato = contato)
      }
    }
  }
</script>

<style  scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  .voltar{
    color: #448aff !important;
    text-decoration: none !important;
}

.top-20{
  margin: 20px;
}
</style>
