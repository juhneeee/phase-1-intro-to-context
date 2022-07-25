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

function createTimeInEvent(employee, time){
    //YYYY-MM-DD HHMM
    //012356789012345
    const obj = {
        type: "TimeIn",
        hour: time.slice(11,13),
        date: time.slice(5,10)
    }
    console.log({obj})
    employee.timeInEvents.push(obj)
}

function createTimeOutEvent(employee, time){
    // console.log(employee.timeInEvents,{time})
    //YYYY-MM-DD HHMM
    //012356789012345
    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: time.slice(11,13),
        date: time.slice(5,10)
    })
}