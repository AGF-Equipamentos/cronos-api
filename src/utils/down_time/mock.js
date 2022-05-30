const Down_timeMock = [
  {
    id: 1,
    datetime_start: '2022-05-27T03:05:00.000Z',
    datetime_end: '2022-05-27T03:11:00.000Z',
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
    rt_in_minutes: 6,
    efficiency: 3.3333333333333335,
    day: 27,
    week: 22,
    month: 5
  },
  {
    id: 2,
    datetime_start: '2022-05-26T03:01:00.000Z',
    datetime_end: '2022-05-26T03:10:00.000Z',
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
    rt_in_minutes: 9,
    efficiency: 3.4444444444444446,
    day: 26,
    week: 22,
    month: 5
  }
]

module.exports = {
  Down_timeMock
}
