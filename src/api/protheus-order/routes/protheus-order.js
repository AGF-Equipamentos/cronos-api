module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/protheus-order',
      handler: 'protheus-order.index',
      config: {
        policies: [],
        middlewares: []
      }
    }
    /*    {
       method: 'GET',
      path: '/efficiency/:name',
      handler: 'efficiency.labor',
      config: {
        policies: [],
        middlewares: [],
      },
     } */
  ]
}
