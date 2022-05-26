
const getAverage = (laborsEfficiency, byParam) => {
  const laborSumAndCount = laborsEfficiency.reduce((acc, labor) => {
    if (!acc[labor[byParam]]) {
      acc[labor[byParam]] = { efficiency: (labor.efficiency * labor.qty), count: labor.qty }
      return acc
    }
    acc[labor[byParam]].efficiency = acc[labor[byParam]].efficiency + (labor.efficiency * labor.qty)
    acc[labor[byParam]].count = acc[labor[byParam]].count + labor.qty
    return acc
  }, {})

  const laborAvg = Object.keys(laborSumAndCount).map((param) => {
    const item = laborSumAndCount[param]
    return {
      [byParam]: Number(param),
      efficiency: Math.round((item.efficiency / item.count) * 100) / 100
    }
  })

  return laborAvg
}

module.exports = {
  getAverage
}
