const numbers = [1, 30, 49, 29, 10, 13]

const rta = numbers.find(number => number === 35)
console.log(rta);

const food = [
    {
        name: 'hambuger',
        price: 80,
        id: '🍔'
    },
    {
        name: 'Hot Dog',
        price: 23,
        id: '🌭'
    },
    {
        name: 'Pizza',
        price: 123,
        id: '🍕'
    },
    {
        name: 'tacos',
        price: 20,
        id: '🌮'
    },
    {
        name: 'cuernito',
        price: 30,
        id: '🥐'
    }
]

const rta1 = food.find(item => item.id === '🍕')

console.log(rta1);