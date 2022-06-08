const efficiencybyDayMock = [
  {
    day: 3,
    efficiency: 11.95,
    rtt_in_minutes: 80
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
]
const efficiencybyWeekMock = [
  {
    week: 15,
    efficiency: 5.6,
    rtt_in_minutes: 5
  },
  {
    week: 19,
    efficiency: 37.52,
    rtt_in_minutes: 89
  },
  {
    week: 20,
    efficiency: 1.6,
    rtt_in_minutes: 22
  }
]
const efficiencybyMonthMock = [
  {
    month: 4,
    efficiency: 5.6,
    rtt_in_minutes: 5
  },
  {
    month: 5,
    efficiency: 39.12,
    rtt_in_minutes: 111
  }
]

module.exports = {
  efficiencybyDayMock,
  efficiencybyWeekMock,
  efficiencybyMonthMock
}
