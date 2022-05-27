'use strict'

const { sub } = require('date-fns')
const { getAverage } = require('../../../utils/average/getAverage')
const { getEfficiency } = require('../../../utils/efficiency/getEfficiency')

module.exports = {
  byDay: async (part_number) => {
    try {
      const po_times = await strapi.entityService.findMany(
        'api::po-time.po-time',
        {
          fields: ['datetime_start', 'datetime_end'],
          filters: {
            production_order: { part_number: part_number },
            datetime_end: {
              $gte: sub(new Date(), {
                days: 30
              })
            }
          },
          populate: ['production_order', 'standart_time']
        }
      )

      const po_timesEfficiency = getEfficiency(po_times)

      const po_timeAvg = getAverage(po_timesEfficiency, 'day')

      return po_timeAvg
    } catch (err) {
      console.log(err)
      return err
    }
  },

  byWeek: async (part_number) => {
    try {
      // fetching the data
      // we dont really need contentSections for this example.
      // its kept here, just for your reference
      const po_times = await strapi.entityService.findMany(
        'api::po-time.po-time',
        {
          fields: ['datetime_start', 'datetime_end'],
          filters: {
            production_order: { part_number: part_number },
            datetime_end: {
              $gte: sub(new Date(), {
                months: 3
              })
            }
          },
          populate: ['production_order', 'standart_time']
        }
      )

      const po_timesEfficiency = getEfficiency(po_times)

      const po_timeAvg = getAverage(po_timesEfficiency, 'week')

      return po_timeAvg
    } catch (err) {
      console.log(err)
      return err
    }
  },

  byMonth: async (part_number) => {
    try {
      // fetching the data
      // we dont really need contentSections for this example.
      // its kept here, just for your reference
      const po_times = await strapi.entityService.findMany(
        'api::po-time.po-time',
        {
          fields: ['datetime_start', 'datetime_end'],
          filters: {
            production_order: { part_number: part_number },
            datetime_end: {
              $gte: sub(new Date(), {
                months: 12
              })
            }
          },
          populate: ['production_order', 'standart_time']
        }
      )

      const po_timesEfficiency = getEfficiency(po_times)

      const po_timeAvg = getAverage(po_timesEfficiency, 'month')

      return po_timeAvg
    } catch (err) {
      console.log(err)
      return err
    }
  }
}
