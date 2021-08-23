const employeeType = [
  {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
  {id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
  {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},
];

const employees = [
    {id: 1, name: "Alice", type: 2},
    {id: 2, name: "Bob", type: 3},
    {id: 3, name: "John", type: 2},
    {id: 4, name: "Karen", type: 1},
    {id: 5, name: "Miles", type: 3},
    {id: 6, name: "Henry", type: 1}
];

const tasks = [
  {id: 1, title: "task01", duration: 60}, //min
  {id: 2, title: "task02", duration: 120},
  {id: 3, title: "task03", duration: 180},
  {id: 4, title: "task04", duration: 360},
  {id: 5, title: "task05", duration: 30},
  {id: 6, title: "task06", duration: 220},
  {id: 7, title: "task07", duration: 640},
  {id: 8, title: "task08", duration: 250},
  {id: 9, title: "task09", duration: 119},
  {id: 10, title: "task10", duration: 560},
  {id: 11, title: "task11", duration: 340},
  {id: 12, title: "task12", duration: 45},
  {id: 13, title: "task13", duration: 86},
  {id: 14, title: "task14", duration: 480},
  {id: 15, title: "task15", duration: 900}
];


/*
  4. Count total hours worked in 1 day ?
  => 39
*/
const getTotalWorkingHour = (employeeTypeList) => {
  let total = 0

  employeeTypeList.forEach((timeRange) => {
    const beginTime = new Date(0,0,0,...String(timeRange.work_begin).replace("00:00:00","24:00:00").split(":")).getTime()
    const endTime = new Date(0,0,0,...String(timeRange.work_end).replace("00:00:00","24:00:00").split(":")).getTime()

    total += Math.abs(endTime - beginTime) /1000 /60 /60
  })

  return total
}


/*
  5. Make a function that take as parameters dayTime and return number of employee working 
  howManyEmployeeByTime(time) => int
*/
const howManyEmployeeByTime = (time) => {
  time = new Date(time)
  const hour = time.getHours()
  const min = time.getMinutes()
  const sec = time.getSeconds()
  const timeString = `${hour<10?`0${hour}`:hour}:${min<10?`0${min}`:min}:${sec<10?`0${sec}`:sec}`

  return employees.filter((employee) => {
    const [type] = employeeType.filter((type) => type.id===employee.type)
    return (timeString>=type.work_begin) && (timeString<=type.work_end.replace("00:00:00","24:00:00"))
  }).length
}


/*
  6. How many days of work needed to done all tasks ?
  => 1 day = 9:00 to 00:00 between 00:00 and 09:00 doesnt count.
*/
const getTasksTakingDays = (taskList) => {
  let total_mins = 0

  taskList.forEach((task) => {
    total_mins += task.duration
  })

  return Math.ceil(total_mins / 60 / 15)
}




console.log(
  "4. Count total hours worked in 1 day ?\n",
  getTotalWorkingHour(employeeType)
)

console.log(
  "5. Make a function that take as parameters dayTime and return number of employee working \n",
  howManyEmployeeByTime(new Date("1990-01-01 09:05:04"))
)

console.log(
  "6. How many days of work needed to done all tasks ?\n",
  getTasksTakingDays(tasks)
)