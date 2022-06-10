'use strict'

const { default: axios } = require('axios')

module.exports = {
  protheus: async () => {
    const { data: protheusOrders } = await axios.get(
      'http://localhost:3333/purchases-grouped',
      {
        params: {
          branch: '0101'
        }
      }
    )

    const strapiOrders = await strapi.entityService.findMany(
      'api::purchase-order.purchase-order'
    )

    console.log(strapiOrders)
    console.log('TESTE')

    const purchaseOrders = protheusOrders.map((order) => {
      const strapiOrderFinded = strapiOrders.find(
        (strapiOrder) => strapiOrder.protheus_number === order.number
      )

      if (strapiOrderFinded) {
        return {
          ...order,
          ...strapiOrderFinded
        }
      }
      return {
        ...order,
        id: null,
        tags: null,
        observation: null,
        createdAt: null,
        updatedAt: null
      }
    })

    return purchaseOrders
    // try {
    // const po_times = await strapi.entityService.findMany(
    //   'api::po-time.po-time',
    //   {
    //     fields: ['datetime_start', 'datetime_end'],
    //     filters: {
    //       production_order: { part_number: part_number },
    //       datetime_end: {
    //         $gte: sub(new Date(), {
    //           days: 30
    //         })
    //       }
    //     },
    //     populate: ['production_order', 'standart_time']
    //   }
    // )

    // const po_timesEfficiency = getEfficiency(po_times)

    // const po_timeAvg = getEfficienctAverageByParam(po_timesEfficiency, 'day')

    // return po_timeAvg
    // } catch (err) {
    //   console.log(err)
    //   return err
    // }
  }
}
