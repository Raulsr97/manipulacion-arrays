const numbers = [1, 30, 49, 29, 10, 13]


const rta = numbers.every(number => number <= 40)
console.log(rta);


const data = [
    {
        name: 'Raul',
        level: '26'
    },
    {
        name: 'Beni',
        level: '25'
    },
    {
        name: 'Buzz',
        level: '25'
    },
    {
        name: 'Alan',
        level: '26'
    },
    {
        name: 'Ferman',
        level: '26'
    },
    {
        name: 'De Ita',
        level: '18'
    },
]

const rta1 = data
.map(item => item.level)
.every(level => level >= 18)

console.log('All players are available to play?', rta1);