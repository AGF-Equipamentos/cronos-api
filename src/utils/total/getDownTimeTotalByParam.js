const getDownTimeTotalByParam = (times, byParam) => {
  const dt_timesSum = times.reduce((acc, dt_time) => {
    if (!acc[dt_time[byParam]]) {
      acc[dt_time[byParam]] = {
        dtt_in_minutes: dt_time.dt_in_minutes
      }
      return acc
    }
    acc[dt_time[byParam]].dtt_in_minutes =
      acc[dt_time[byParam]].dtt_in_minutes + dt_time.dt_in_minutes
    return acc
  }, {})

  const dt_timeAvg = Object.keys(dt_timesSum).map((param) => {
    const item = dt_timesSum[param]
    return {
      [byParam]: Number(param),
      dtt_in_minutes: Math.round(item.dtt_in_minutes)
    }
  })
  return dt_timeAvg
}

module.exports = {
  getDownTimeTotalByParam
}
