module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/efficiency',
      handler: 'efficiency.index',
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
