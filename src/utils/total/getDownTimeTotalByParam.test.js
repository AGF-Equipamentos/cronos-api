const { byDayDT } = require('../total/mock')
const { getDownTimeTotalByParam } = require('./getDownTimeTotalByParam')

describe('getDownTimeTotalByParam', () => {
  it('should calculate the downtime on the day', () => {
    const downtimeSum = getDownTimeTotalByParam(byDayDT, 'day')

    expect(downtimeSum).toStrictEqual([
      {
        day: 1,
        dtt_in_minutes: 67
      },
      {
        day: 2,
        dtt_in_minutes: 30
      },
      {
        day: 3,
        dtt_in_minutes: 15
      }
    ])
  })

  it('should calculate the downtime on the day', () => {
    const downtimeSum = getDownTimeTotalByParam(byDayDT, 'week')

    expect(downtimeSum).toStrictEqual([
      {
        week: 14,
        dtt_in_minutes: 27
      },
      {
        week: 18,
        dtt_in_minutes: 32
      },
      {
        week: 23,
        dtt_in_minutes: 53
      }
    ])
  })

  it('should calculate the downtime on the day', () => {
    const downtimeSum = getDownTimeTotalByParam(byDayDT, 'month')

    expect(downtimeSum).toStrictEqual([
      {
        month: 4,
        dtt_in_minutes: 27
      },
      {
        month: 5,
        dtt_in_minutes: 32
      },
      {
        month: 6,
        dtt_in_minutes: 53
      }
    ])
  })
})
