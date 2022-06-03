const { getEfficiency } = require('./getEfficiency')
const { po_timesMock } = require('./mock')

describe('getEfficiency', () => {
  it('should calculate the efficiency', () => {
    const efficiencyEfficiency = getEfficiency(po_timesMock)

    expect(efficiencyEfficiency).toStrictEqual([
      {
        id: 1,
        datetime_start: new Date(2022, 5, 27, 0, 5),
        datetime_end: new Date(2022, 5, 27, 0, 11),
        production_order: {
          id: 3,
          part_number: 'VIXMOT0011',
          qty: 2,
          obs: 'Teste',
          createdAt: '2022-05-26T15:17:04.697Z',
          updatedAt: '2022-05-27T12:51:33.288Z'
        },
        standart_time: {
          id: 1,
          part_number: 'VIXMOT0011',
          time_in_minutes: 10,
          createdAt: '2022-05-26T13:50:15.686Z',
          updatedAt: '2022-05-26T13:50:15.686Z'
        },
        day: 27,
        efficiency: 10 / 3, // 3 => (11 - 5) / 2
        month: 6,
        week: 27,
        rt_in_minutes: 6
      },
      {
        id: 2,
        datetime_start: new Date(2022, 5, 26, 0, 1),
        datetime_end: new Date(2022, 5, 26, 0, 10),
        production_order: {
          id: 3,
          part_number: 'VIXMOT0011',
          qty: 2,
          obs: 'Teste',
          createdAt: '2022-05-26T15:17:04.697Z',
          updatedAt: '2022-05-27T12:51:33.288Z'
        },
        standart_time: {
          id: 2,
          part_number: 'VIXMOT0011',
          time_in_minutes: 15.5,
          createdAt: '2022-05-26T13:54:31.891Z',
          updatedAt: '2022-05-26T13:54:31.891Z'
        },
        day: 26,
        efficiency: 15.5 / 4.5, // 4.5 => (10 - 1) / 2
        month: 6,
        week: 27,
        rt_in_minutes: 9
      }
    ])
  })
})
