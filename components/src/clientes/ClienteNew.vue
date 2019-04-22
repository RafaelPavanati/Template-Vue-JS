<template>
  <div>
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Informações pessoais"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
      </b-form-group>


      <b-form-group
        label-cols-sm="3"
        label="Nome:"
        label-align-sm="right"
        label-for=""
      >
        <b-form-input v-model="cliente.nome"/>
      </b-form-group>

      <b-form-group
        class="col-md-6"
        label-cols=""
        v-mask="['###.###.###-##','##.###.###/####-##']"
        label="CPF/CNPJ:"
        label-align-sm="right"
        label-for=""
      >
        <b-form-input v-model="cliente.cpfCnpj"/>


      </b-form-group>

      <b-form-group
        class="col-md-6"
        label-cols=""
        label="IE:"
        label-align-sm="right"
        label-for=""
      >
        <b-form-input v-model="cliente.ie"/>
      </b-form-group>
      <b-form-group
        class="col-md-6"
        label-cols=""
        label="Data Nasc:"
        label-align-sm="right"
        label-for=""
      >
        <b-form-input type="date"/>
      </b-form-group>

      <b-form-group
        class="col-md-6"
        label-cols=""
        label="Email:"
        label-align-sm="right"
        label-for=""
      >
        <b-form-input type="email"/>
      </b-form-group>

      <b-form-group
        class="col-md-6"
        label-cols=""
        label="Telefone:"
        v-mask="['(##) #### ####','(##) ##### ####']"
        label-align-sm="right"
        label-for=""
      >
        <b-form-input type="email"/>
      </b-form-group>
    </b-card>
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Endereço"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label-cols-sm="3"
          label="Rua:"
          label-align-sm="right"
          label-for="nestedStreet"
        >

          <b-form-input id=""/>
        </b-form-group>
        <b-form-group
          label-cols-sm="3"
          label="Bairro :"
          label-align-sm="right"
          label-for="nestedStreet"
        >

          <b-form-input id="nestedStreet"/>
        </b-form-group>
        <b-form-group label-cols-sm="3" label="Cidade:" label-align-sm="right" label-for="nestedCity">
          <b-form-input id="nestedCity"/>
        </b-form-group>

        <b-form-group label-cols-sm="3" label="UF:" label-align-sm="right" label-for="nestedState">
          <b-form-input id="nestedState"/>
        </b-form-group>

        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="Complemento..."
          rows="3"
          max-rows="6"
        />
      </b-form-group>
    </b-card>
    <br>
    <b-button @click="salvar()" variant="outline-secondary">Salvar</b-button>
  </div>
</template>

<script>
  import api from '../security/auth'

 // const { correios } = require('correios-lib')

  // correios.cep('<CEP a ser consultado>')
  //   .then(function(data) {
  //     console.log(data)
  //   }, function(error) {
  //     console.log(error)
  //   })
  export default {
    data () {
      return {
        cliente: {}
      }
    },
    methods: {
      bunscaCep: function () {
        correios.cep("")
          .then((data) => {

          })

      },
      salvar: function () {
        api.post('clientes', this.cliente).then(value => {
          this.$notify({
            group: 'foo',
            type: 'success',
            title: 'Cliente Cadastrado',
          })
          this.$router.push({ name: 'Clientes' })
        })
      }
    }

  }
</script>
