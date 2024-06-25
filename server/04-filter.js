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
        customerName: 'Raul',
        total: 234,
        delivered: false
    },
]

const deliveredOrders = orders.filter(item => item.delivered && item.total >= 100)

console.log(deliveredOrders);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}

console.log(search('Raul'));