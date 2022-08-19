const { getDownTime } = require('./getDownTime')
const { DownTimeMock } = require('./mock')

describe('getDownTime', () => {
  it('should calculate the DownTime', () => {
    const down_time = getDownTime(DownTimeMock)

    expect(down_time).toStrictEqual([
      {
        id: 1,
        datetime_start: new Date(2022, 5, 27, 0, 5),
        datetime_end: new Date(2022, 5, 27, 0, 11),
        dt_in_minutes: 6, // 11 - 5 = 6
        day: 27,
        week: 27,
        month: 6
      },
      {
        id: 2,
        datetime_start: new Date(2022, 5, 26, 0, 1),
        datetime_end: new Date(2022, 5, 26, 0, 10),
        dt_in_minutes: 9, // 10 - 1 = 9
        day: 26,
        week: 27,
        month: 6
      }
    ])
  })
})
