const getDown_time = (po_times) => {
  const po_timesDown_time = po_times.map((po_time) => ({
    ...po_time,
    rt_in_minutes:
      (new Date(po_time.datetime_end) - new Date(po_time.datetime_strart)) /
      (1000 * 60)
  }))

  return po_timesDown_time
}

module.exports = {
  getDown_time
}
