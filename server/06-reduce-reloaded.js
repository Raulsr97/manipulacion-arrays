const items = [1, 3, 2, 3, 3, 2, 2, 2, 5]

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] = obj[item] + 1
    }
    return obj
}, {})

console.log(rta);


const data = [
    {
        name: 'Raul',
        level: 'high'
    },
    {
        name: 'Beni',
        level: 'low'
    },
    {
        name: 'Buzz',
        level: 'medium'
    },
    {
        name: 'Alan',
        level: 'high'
    },
    {
        name: 'Ferman',
        level: 'medium'
    },
    {
        name: 'De Ita',
        level: 'low'
    },
]

const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] = obj[item] + 1
    }
    return obj
}, {})

console.log(rta1);