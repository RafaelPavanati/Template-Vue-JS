<template>
  <div class="">
    <h2>Clientes</h2>
    <br>
    <div>
      <b-input-group prepend="Filtro">
        <b-form-input type="text"/>
        <b-input-group-append>
          <b-dropdown size="sm" text="Style" slot="append">
            <div style="padding-left: 2%" class="w-75">
              <b-form-checkbox inline v-model="striped">Striped</b-form-checkbox>
              <b-form-checkbox inline v-model="bordered">Bordered</b-form-checkbox>
              <b-form-checkbox inline v-model="borderless">Borderless</b-form-checkbox>
              <b-form-checkbox inline v-model="outlined">Outlined</b-form-checkbox>
              <b-form-checkbox inline v-model="small">Small</b-form-checkbox>
              <b-form-checkbox inline v-model="hover">Hover</b-form-checkbox>
              <b-form-checkbox inline v-model="dark">Dark</b-form-checkbox>
              <b-form-checkbox inline v-model="fixed">Fixed</b-form-checkbox>
              <b-form-checkbox inline v-model="footClone">Foot Clone</b-form-checkbox>
            </div>
          </b-dropdown>

          <b-button variant="outline-success" @click="novoCliente()">Novo Cliente</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <br>
    <b-table
      :striped="striped"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :items="clientes"
      :fields="fields"
    />

    <b-pagination-nav :link-gen="linkGen" :number-of-pages="pages"/>
  </div>
</template>

<script>
  import api from '../security/auth'

  export default {

    created () {
      api.get('clientes')
        .then(value =>
          this.clientes = value.data
        )
    },
    data () {
      return {
        pages: 100,
        clientes: [],
        fields: ['nome', 'last_name', 'age'],
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
        ],
        striped: true,
        bordered: false,
        borderless: true,
        outlined: true,
        small: false,
        hover: true,
        dark: false,
        fixed: false,
        footClone: false
      }

    },
    methods: {
      linkGen (pageNum) {
        console.log(pageNum)
      },
      novoCliente: function () {
        this.$router.push({ path: '/clientes-new' })
      }
    }

  }
</script>
<style>

</style>
