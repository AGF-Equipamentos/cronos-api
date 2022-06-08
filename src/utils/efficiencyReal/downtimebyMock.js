const downtimebyDayMock = [
  {
    day: 3,
    dtt_in_minutes: 26
  },
  {
    day: 4,
    dtt_in_minutes: 59
  },
  {
    day: 6,
    dtt_in_minutes: 2
  },
  {
    day: 15,
    dtt_in_minutes: 16
  }
]
const downtimebyWeekMock = [
  {
    week: 15,
    dtt_in_minutes: 2
  },
  {
    week: 19,
    dtt_in_minutes: 85
  },
  {
    week: 20,
    dtt_in_minutes: 16
  }
]
const downtimebyMonthMock = [
  {
    month: 4,
    dtt_in_minutes: 2
  },
  {
    month: 5,
    dtt_in_minutes: 101
  }
]

module.exports = {
  downtimebyDayMock,
  downtimebyWeekMock,
  downtimebyMonthMock
}
