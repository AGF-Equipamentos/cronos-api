const { byDayMock } = require('../average/mock')
const { getEfficienctAverageByParam } = require('./getEfficienctAverageByParam')

describe('getEfficienctAverageByParam', () => {
  it('should calculate the efficiency average on the day', () => {
    const efficiencyAverage = getEfficienctAverageByParam(byDayMock, 'day')

    expect(efficiencyAverage).toStrictEqual([
      {
        day: 3,
        efficiency: 11.95,
        rtt_in_minutes: 18
      },
      {
        day: 4,
        efficiency: 25.57,
        rtt_in_minutes: 9
      },
      {
        day: 6,
        efficiency: 5.6,
        rtt_in_minutes: 5
      },
      {
        day: 15,
        efficiency: 1.6,
        rtt_in_minutes: 22
      }
    ])
  })

  it('should calculate the efficiency average in the week', () => {
    const efficiencyAverage = getEfficienctAverageByParam(byDayMock, 'week')

    expect(efficiencyAverage).toStrictEqual([
      {
        week: 15,
        efficiency: 5.6,
        rtt_in_minutes: 5
      },
      {
        week: 19,
        efficiency: 17.73,
        rtt_in_minutes: 27
      },
      {
        week: 20,
        efficiency: 1.6,
        rtt_in_minutes: 22
      }
    ])
  })

  it('should calculate the efficiency average in the month', () => {
    const efficiencyAverage = getEfficienctAverageByParam(byDayMock, 'month')

    expect(efficiencyAverage).toStrictEqual([
      {
        month: 4,
        efficiency: 5.6,
        rtt_in_minutes: 5
      },
      {
        month: 5,
        efficiency: 15.61,
        rtt_in_minutes: 49
      }
    ])
  })
})
