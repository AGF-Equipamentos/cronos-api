'use strict'

module.exports = {
  async index(ctx) {
    try {
      const { byParam, part_number } = ctx.request.query
      let data
      switch (byParam) {
        case 'day':
          data = await strapi
            .service('api::efficiency.efficiency')
            .byDay(part_number)
          break
        case 'week':
          data = await strapi
            .service('api::efficiency.efficiency')
            .byWeek(part_number)
          break
        default:
          data = await strapi
            .service('api::efficiency.efficiency')
            .byMonth(part_number)
          break
      }

      ctx.body = data
      return ctx
    } catch (err) {
      console.log(err)
      ctx.badRequest('Page report controller error', { moreDetails: err })
    }
  }
}
