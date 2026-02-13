const stockItems = [
    { item:"Laptop", price: 1200, inStock: true, instockamt: 12 },
{ item: "Mouse" , price: 25, inStock: false, instockamt: 0 },
{ item: "Keyboard", price: 75, inStock: true, instockamt: 100 },
{ item: "Monitor", price: 300, inStock: true, instockamt: 23 },
{ item:"USB Cable", price: 10, inStock: false, instockamt: 0 }
];

const inStockTotals = stockItems.filter(item => item.inStock > 0);
console.log(inStockTotals);