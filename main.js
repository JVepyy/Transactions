const  transactions = [
    { ID: 1, amount: 100, createdAt: 1672531199, customerName: "Alice", status: "canceled" },
    { ID: 2, amount: 200, createdAt: 1682531199, customerName: "Bob", status: "completed" },
    { ID: 3, amount: 150, createdAt: 1652531199, customerName: "Charlie", status: "canceled" },
    { ID: 4, amount: 50, createdAt: 1692531199, customerName: "Alice", status: "canceled" },
];
function groupCanceledTransactions(transactions) {
    return transactions
        .filter(transaction => transaction.status === 'canceled')
        .sort((a, b) => b.createdAt - a.createdAt)
        .reduce((result, transaction) =>
        {
            const year = new Date(transaction.createdAt * 1000).getFullYear()
            result[year] = result[year] || []
            result[year].push(transaction)
            return result
        }, {})

}

console.log(groupCanceledTransactions(transactions))
