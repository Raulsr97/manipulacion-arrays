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
const rta = orders.map(item => item.total)

console.log('original', orders);
console.log('rta', rta);

const rta2 = orders.map(item => {
    return {
        ...item,
        tax: .19
    }
})

console.log('rta2', rta2);
console.log('original', orders);