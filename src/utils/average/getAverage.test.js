const { byDayMock } = require("../average/mock")
const { getAverage } = require("./getAverage")

describe('getAverage', () => {
  it('should calculate the efficiency average on the day', () => {
    const efficiencyAverage = getAverage(byDayMock, 'day')

    expect(efficiencyAverage).toMatchObject([
      {
        "day": 3,
        "efficiency": 11.95,
      },
      {
        "day": 4,
        "efficiency": 25.57,
      },
      {
        "day": 6,
        "efficiency": 5.6,
      },
      {
        "day": 15,
        "efficiency": 1.6,
      }
    ])
  })

    it('should calculate the efficiency average in the week', () => {
     const efficiencyAverage = getAverage(byDayMock, 'week')

     expect(efficiencyAverage).toMatchObject([
        {
        "week": 15,
        "efficiency": 5.6,
        }, 
        {
         "week": 19,
         "efficiency": 17.73,
       },
       {
        "week": 20,
        "efficiency": 1.6,
      }
     ])
   })

   it('should calculate the efficiency average in the month', () => {
     const efficiencyAverage = getAverage(byDayMock, 'month')
  
     expect(efficiencyAverage).toMatchObject([
       {
        "month": 4,
        "efficiency": 5.6,
       }, 
       {
        "month": 5,
        "efficiency": 15.61,
       }
     ])
   })
})
