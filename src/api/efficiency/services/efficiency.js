'use strict'

const { sub } = require('date-fns')
const {
  getAverage
} = require('../../../utils/average/getAverage')
const { getEfficiency } = require('../../../utils/efficiency/getEfficiency')

/**
 * pages-report service.
 */

module.exports = {
  byDay: async (part_number) => {
    try {
      const labors = await strapi.entityService.findMany('api::labor.labor', {
        fields: ['part_number', 'qty', 'datetime_start', 'datetime_end'],
        filters: {
          part_number: part_number,
          datetime_end: {
            $gte: sub(new Date(), {
              days: 30
            })
          }
        },
        populate: { pn_time: true }
      })

      const laborsEfficiency = getEfficiency(labors)

      const laborAvg = getAverage(laborsEfficiency, 'day')

      return laborAvg
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
      const labors = await strapi.entityService.findMany('api::labor.labor', {
        fields: ['part_number', 'qty', 'datetime_start', 'datetime_end'],
        filters: {
          part_number: part_number,
          datetime_end: {
            $gte: sub(new Date(), {
              months: 3
            })
          }
        },
        populate: { pn_time: true }
      })

      const laborsEfficiency = getEfficiency(labors)

      const laborAvg = getAverage(laborsEfficiency, 'week')

      return laborAvg
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
      const labors = await strapi.entityService.findMany('api::labor.labor', {
        fields: ['part_number', 'qty', 'datetime_start', 'datetime_end'],
        filters: {
          part_number: part_number,
          datetime_end: {
            $gte: sub(new Date(), {
              months: 12
            })
          }
        },
        populate: { pn_time: true }
      })

      const laborsEfficiency = getEfficiency(labors)

      const laborAvg = getAverage(laborsEfficiency, 'month')

      return laborAvg
    } catch (err) {
      console.log(err)
      return err
    }
  }
}
