const {
  efficiencybyDayMock,
  efficiencybyWeekMock,
  efficiencybyMonthMock
} = require('./efficiencybyMock')
const {
  downtimebyDayMock,
  downtimebyWeekMock,
  downtimebyMonthMock
} = require('./downtimebyMock')
const { getEfficiencyReal } = require('./getEfficiencyReal')

describe('getEfficiency', () => {
  it('should calculate the efficiency on the day', () => {
    const efficiencyEfficiency = getEfficiencyReal(
      efficiencybyDayMock,
      downtimebyDayMock,
      'day'
    )

    expect(efficiencyEfficiency).toStrictEqual([
      {
        day: 3,
        efficiency: 11.95,
        rtt_in_minutes: 80,
        real_efficiency: 12.27
      },
      {
        day: 4,
        efficiency: 25.57,
        rtt_in_minutes: 9,
        real_efficiency: 32.13
      },
      {
        day: 6,
        efficiency: 5.6,
        rtt_in_minutes: 5,
        real_efficiency: 6.0
      },
      {
        day: 15,
        efficiency: 1.6,
        rtt_in_minutes: 22,
        real_efficiency: 2.33
      }
    ])
  })

  it('should calculate the efficiency on the week', () => {
    const efficiencyEfficiency = getEfficiencyReal(
      efficiencybyWeekMock,
      downtimebyWeekMock,
      'week'
    )

    expect(efficiencyEfficiency).toStrictEqual([
      {
        week: 15,
        efficiency: 5.6,
        rtt_in_minutes: 5,
        real_efficiency: 6
      },
      {
        week: 19,
        efficiency: 37.52,
        rtt_in_minutes: 89,
        real_efficiency: 38.48
      },
      {
        week: 20,
        efficiency: 1.6,
        rtt_in_minutes: 22,
        real_efficiency: 2.33
      }
    ])
  })

  it('should calculate the efficiency on the month', () => {
    const efficiencyEfficiency = getEfficiencyReal(
      efficiencybyMonthMock,
      downtimebyMonthMock,
      'month'
    )

    expect(efficiencyEfficiency).toStrictEqual([
      {
        month: 4,
        efficiency: 5.6,
        rtt_in_minutes: 5,
        real_efficiency: 6
      },
      {
        month: 5,
        efficiency: 39.12,
        rtt_in_minutes: 111,
        real_efficiency: 40.03
      }
    ])
  })
})
