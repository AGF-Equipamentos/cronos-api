var getWeek = require('date-fns/getWeek')

const getEfficiency = (po_times) => {
  const po_timesEfficiency = po_times.map((po_time) => ({
    ...po_time,
    // time_in_minutes / ((datetime_end - datetime_start) / qty) average time by piece
    efficiency:
      po_time.standart_time.time_in_minutes /
      ((new Date(po_time.datetime_end) - new Date(po_time.datetime_start)) /
        (1000 * 60) /
        po_time.production_order.qty),
    day: new Date(po_time.datetime_end).getDate(),
    week: getWeek(new Date(po_time.datetime_end)),
    month: new Date(po_time.datetime_end).getMonth() + 1
  }))

  return po_timesEfficiency
}

module.exports = {
  getEfficiency
}
