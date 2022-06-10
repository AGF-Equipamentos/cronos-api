'use strict'

module.exports = {
  async index(ctx) {
    try {
      // const { part_number } = ctx.request.query
      const data = await strapi
        .service('api::protheus-order.protheus-order')
        .protheus()

      ctx.body = data
      return ctx
    } catch (err) {
      console.log(err)
      ctx.badRequest('Page report controller error', { moreDetails: err })
    }
  }
}
