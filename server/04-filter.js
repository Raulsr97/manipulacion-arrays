const words = ['spray', 'limit', 'elite', 'exuberant']

const rta = words.filter(item => item.length >= 6)

console.log('original', words);
console.log('rta', rta);


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
        customerName: 'Osvaldo',
        total: 234,
        delivered: false
    },
]

const deliveredOrders = orders.filter(item => item.delivered)

console.log(deliveredOrders);