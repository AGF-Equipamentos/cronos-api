const { byDayMock } = require("../average/mock")
const { getEfficiency } = require("./getEfficiency")
const { laborsMock } = require("./mock")

describe('getEfficiency', () => {
  it('should calculate the efficiency', () => {
    const efficiencyEfficiency = getEfficiency(laborsMock)

    expect(efficiencyEfficiency).toMatchObject([
      {
        "id": 3,
        "part_number": "VIXMOT0011",
        "qty": 5,
        "datetime_start":  new Date(2022, 4, 3, 0, 5),
        "datetime_end": new Date(2022, 4, 3, 0, 14),
        "pn_time": {
          "id": 1,
          "part_number": "VIXMOT0011",
          "time_in_minutes": 10,
          "createdAt": "2022-05-11T14:06:55.302Z",
          "updatedAt": "2022-05-11T14:06:55.302Z"
        },
        "day": 3,
        "efficiency": 10 / 1.8, // (14 - 5) / 5
        "month": 5,
        "week": 19
      },
      {
        "id": 3,
        "part_number": "VIXMOT0011",
        "qty": 8,
        "datetime_start":  new Date(2022, 4, 3, 0, 18),
        "datetime_end": new Date(2022, 4, 3, 0, 29),
        "pn_time": {
          "id": 1,
          "part_number": "VIXMOT0011",
          "time_in_minutes": 10,
          "createdAt": "2022-05-11T14:06:55.302Z",
          "updatedAt": "2022-05-11T14:06:55.302Z"
        },
        "day": 3,
        "efficiency": 10 / 1.375, // (29 - 18) / 8
        "month": 5,
        "week": 19
      },
      {
        "id": 3,
        "part_number": "VIXMOT0011",
        "qty": 15,
        "datetime_start":  new Date(2022, 4, 3, 0, 5),
        "datetime_end": new Date(2022, 4, 3, 0, 80),
        "pn_time": {
          "id": 1,
          "part_number": "VIXMOT0011",
          "time_in_minutes": 10,
          "createdAt": "2022-05-11T14:06:55.302Z",
          "updatedAt": "2022-05-11T14:06:55.302Z"
        },
        "day": 3,
        "efficiency": 10 / 5, // (80 - 5) / 15
        "month": 5,
        "week": 19
      }
    ])
  })
})