var getWeek = require('date-fns/getWeek')

const getEfficiency = (labors) => {
  const laborsEfficiency = labors.map((labor) => ({
    ...labor,
    // time_in_minutes / ((datetime_end - datetime_start) / qty) average time by piece
    efficiency:
     labor.pn_time.time_in_minutes /
      ((new Date(labor.datetime_end) - new Date(labor.datetime_start)) /
        (1000 * 60) /
        labor.qty),
    day: new Date(labor.datetime_end).getDate(),
    week: getWeek(new Date(labor.datetime_end)),
    month: new Date(labor.datetime_end).getMonth() + 1
  }))

  return laborsEfficiency
}

module.exports = {
  getEfficiency
}
