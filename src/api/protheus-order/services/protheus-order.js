'use strict'

const { default: axios } = require('axios')

module.exports = {
  protheus: async () => {
    const { data: protheusOrders } = await axios.get(
      'https://api.agfequipamentos.com.br/purchases-grouped',
      {
        params: {
          branch: '0101'
        }
      }
    )

    const strapiOrders = await strapi.entityService.findMany(
      'api::purchase-order.purchase-order'
    )

    const users = await strapi.db
      .query('plugin::users-permissions.user')
      .findMany('api::user.user')

    const purchaseOrders = protheusOrders.map((protheusOrder) => {
      let mergedOrders = protheusOrder
      let status = 'Aguardando aprovação'

      const strapiOrderFinded = strapiOrders.find(
        (strapiOrder) => strapiOrder.protheus_number === protheusOrder.number
      )

      const userFinded = users.find(
        (user) => user.protheus_code === protheusOrder.buyer
      )

      if (userFinded) {
        mergedOrders = {
          ...mergedOrders,
          buyer: userFinded.name ? userFinded.name : userFinded.username
        }
      }

      if (protheusOrder.approved === 'yes') {
        status = 'Aguardando envio ao fornecedor'
      }

      if (strapiOrderFinded) {
        switch (strapiOrderFinded.status) {
          case 'Confirmado':
            if (new Date(protheusOrder.delivery) < new Date()) {
              status = 'Atrasado'
            } else {
              status = strapiOrderFinded.status
            }
            break
          case null:
            break
          default:
            status = strapiOrderFinded.status
        }

        mergedOrders = {
          ...mergedOrders,
          ...strapiOrderFinded,
          status
        }
      } else {
        mergedOrders = {
          ...mergedOrders,
          id: '',
          tags: '',
          observation: '',
          createdAt: '',
          updatedAt: '',
          status
        }
      }

      return mergedOrders
    })

    return purchaseOrders
  },
  updateOrCreate: async (data) => {
    const purchaseOrder = await strapi.db
      .query('api::purchase-order.purchase-order')
      .findOne({
        where: { protheus_number: data.protheus_number }
      })

    if (!purchaseOrder) {
      const newPurchaseOrder = await strapi.entityService.create(
        'api::purchase-order.purchase-order',
        {
          data: data
        }
      )
      return newPurchaseOrder
    } else {
      const updatedPurchaseOrder = await strapi.entityService.update(
        'api::purchase-order.purchase-order',
        purchaseOrder.id,
        {
          data: data
        }
      )
      return updatedPurchaseOrder
    }
  }
}
