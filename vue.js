var app = new Vue({
  el: '#app',
  data: {
    nome: 'Caneta',
    preco: 2.99,
    desconto: 0.49
  },
  methods: {
    horaCerta() {
      return new Date().toLocaleDateString() + ' on ' + new Date().toLocaleTimeString()
    }
  },
  computed: {
    precoComDesconto () {
      return this.preco - this.desconto
    }
  }
})
