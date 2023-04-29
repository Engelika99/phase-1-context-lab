/* Your Code Here */
function createEmployeeRecord(array){
    return {
        firstName : array[0],
        familyName : array[1],
        title : array[2],
        payPerHour : array[3],
        timeInEvents : [],
        timeOutEvents : [],
     }
    }
    let twoRows = [
        ["moe", "sizlak", "barkeep", 2],
        ["bartholomew", "simpson", "scamp", 3]
      ]
      function createEmployeeRecords(array){
        let employeeRecords = [];
        array.forEach(element => {
        employeeRecords.push(createEmployeeRecord(element))
            
    });
        return employeeRecords;
      }
      function createTimeInEvent(timeIn){
        let newTime= timeIn.split(" ")
        this.timeInEvents.push(new Object({
         type : "TimeIn",
         date : newTime[0],
         hour : parseInt(newTime[1])
    }))
        return this

      }
      function createTimeOutEvent(timeOut){
        let newTime = timeOut.split(" ")
        this.timeOutEvents.push(new Object({
        type : "TimeOut",
        date : newTime[0],
        hour : parseInt(newTime[1])
    }))
        return this
    }
    function hoursWorkedOnDate(date) {
        const timeIn = this.timeInEvents.find(event => event.date === date).hour;
        const timeOut = this.timeOutEvents.find(event => event.date === date).hour;
        return (timeOut - timeIn) / 100;
    }
    function wagesEarnedOnDate(earnedOnDate) {
        const totalHoursWorked = hoursWorkedOnDate.call(this, earnedOnDate)
    
        return totalHoursWorked * this.payPerHour;
    }
    const findEmployeeByFirstName =  (collection, firstNameString) => {
        return collection.find((employee) => {
          return employee.firstName === firstNameString;
        })
      }
      function calculatePayroll(employeeRecords) {
        const allPay = employeeRecords.reduce((totalPay, employee) => {
          return totalPay + allWagesFor.call(employee);
        }, 0);
      
        return allPay;
      }
    




/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}