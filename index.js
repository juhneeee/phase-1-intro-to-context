// Your code here
function createEmployeeRecord([first, last, title, payRate]){
    return {
        firstName: first,
        familyName: last,
        title: title,
        payPerHour: payRate,
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr){
    return arr.map(record=>createEmployeeRecord(record))
}

function createTimeInEvent(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

function createTimeOutEvent(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

function hoursWorkedOnDate(employee,date){
    
}

function wagesEarnedOnDate(){

}

function calculatePayroll(){
    
}