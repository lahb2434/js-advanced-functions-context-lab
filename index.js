/* Your Code Here */
const createEmployeeRecord = (info) => (
  {
    firstName: info[0],
    familyName: info[1],
    title: info[2],
    payPerHour: info[3],
    timeInEvents: [],
    timeOutEvents: []
  }
)

const createEmployeeRecords = (employeesInfo) => (
   employeesInfo.map(employee => createEmployeeRecord(employee))  
)

function createTimeInEvent(dateStamp) {
  let [date, hour] = dateStamp.split(' ')
  this.timeInEvents.push({
      type: "TimeIn", 
      date, 
      hour: +hour
    })
  return this
}

  function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({type: "TimeOut", date, hour: +hour})
    return this
  }

  function hoursWorkedOnDate(dateStamp) {
    const hoursWorked = (timeInTimeOut, date) => (
      timeInTimeOut.find(x => x.date === date)
    )
    let timeIn = hoursWorked(this.timeInEvents, dateStamp).hour
    let timeOut = hoursWorked(this.timeOutEvents, dateStamp).hour
    return (timeOut - timeIn) / 100
}

function wagesEarnedOnDate(dateStamp) {
    let hoursWorked = hoursWorkedOnDate.call(this, dateStamp);
    return hoursWorked * this.payPerHour
  }
  
  
  function calculatePayroll(employeeRoster) {
   return employeeRoster.reduce((memo, d) => {
     return memo + allWagesFor.call(d) 
   }, 0)
  }
  
  function findEmployeeByFirstName(employeeRoster, name) { 
    return employeeRoster.find(x => x.firstName === name)  
  }

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}












  

  

  

  

  
