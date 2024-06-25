const numbers = [1, 2, 3, 4]

const rta = numbers.some(item => item % 2 === 0)
console.log(rta);


const orders = [
    {
        customerName: 'Raul',
        total: 233,
        delivered: true
    },
    {
        customerName: 'Fernando',
        total: 323,
        delivered: false
    },
    {
        customerName: 'Luis',
        total: 435,
        delivered: true
    },
    {
        customerName: 'Raul',
        total: 234,
        delivered: false
    },
]

const rta2 = orders
.map(item => item.delivered)
.some(item => item === true)


console.log(rta2);

const dates =  [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: 'Cita de trabajo'
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: 'Cita con mi jefe'
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: 'Cena'
    },
]



const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30)
}

const { areIntervalsOverlapping } = require("date-fns");

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
        {start: date.startDate, end: date.endDate},
        {start: newDate.startDate, end: newDate.endDate}
    )
    })
}

console.log('is overlap:', isOverlap(newAppointment));
