const getAverage = (times, byParam, aggregator) => {
  const po_timeSumAndCount = times.reduce((acc, po_time) => {
    if (!acc[po_time[byParam]]) {
      acc[po_time[byParam]] = {
        aggregator: po_time.aggregator * po_time.production_order.qty,
        count: po_time.production_order.qty
      }
      return acc
    }
    acc[po_time[byParam]].aggregator =
      acc[po_time[byParam]].aggregator +
      po_time.aggregator * po_time.production_order.qty
    acc[po_time[byParam]].count =
      acc[po_time[byParam]].count + po_time.production_order.qty
    return acc
  }, {})

  const po_timeAvg = Object.keys(po_timeSumAndCount).map((param) => {
    const item = po_timeSumAndCount[param]
    return {
      [byParam]: Number(param),
      aggregator: Math.round((item.aggregator / item.count) * 100) / 100
    }
  })

  return po_timeAvg
}

module.exports = {
  getAverage
}
