const getEfficiencyReal = (times, dt, byParam) => {
  const efficiencyfind = times.map((efficiency) => {
    const dtFinded = dt.find(
      (dtItem) => dtItem[byParam] === efficiency[byParam]
    )

    if (dtFinded) {
      return {
        ...efficiency,
        real_efficiency:
          Math.round(
            (efficiency.efficiency +
              dtFinded.dtt_in_minutes / efficiency.rtt_in_minutes) *
              100
          ) / 100
      }
    } else {
      return {
        ...efficiency,
        real_efficiency: efficiency.efficiency
      }
    }
  })
  return efficiencyfind
}

module.exports = {
  getEfficiencyReal
}
