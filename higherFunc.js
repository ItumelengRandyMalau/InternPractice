/*const users = [
  { name: "Alice", role: "admin", purchases: 120 },
  { name: "Bob", role: "user", purchases: 200 },
  { name: "Charlie", role: "admin", purchases: 150 }
];

//use reduce(), with an object
//check if key:value exist,
//if doesn't store and initialize to 0
//assign key with value(acc) and increase it
//return carr
// print the results

const totalsByRole = users.reduce((acc, user) => {
	if(!acc[user.role]){
		acc[user.role] = 0;
	}
	acc[user.role] += user.purchases;
	return acc;
}, {});
console.log(totalsByRole);

//filter user by purchases
//output: [120, 200, 150]
const totalP = users. map(user => user.purchases);
console.log(totalP);

//filter admin users
//output role:admin.

const names = users.filter(user => user.purchases < 200);
console.log(names);

const transactions = [
	{ category: "food", amount: 50 },
	{ category: "electronics", amount: 500 },
	{ category: "food", amount: 30 },
	{ category: "clothing", amount: 100 },
	{ category: "electronics", amount: 200 }
];

const totalsByCat = transactions.reduce((acc, trans) => {
	if (!acc[trans.category]) {
		acc[trans.category] = 0;
	}
	acc[trans.category] += trans.amount;
	return acc;
}, {});
console.log(totalsByCat);

const users = [
	{ name: "Alice", purchases: 120 },
	{ name: "", purchases: 200 },
	{ name: "Bob", purchases: null },
	{ name: "Charlie", purchases: 150 }
];

//Remove invalid users (missing name or purchases).
const cleanUsers = users.filter(user =>
	user.name && typeof user.purchases === "number"
);
console.log(cleanUsers);*/

const users = [
	{ name: "Alice", role: "admin" },
	{ name: "Bob", role: "user" },
	{ name: "Charlie", role: "admin" }
];
// Group users by role
const grouped = users.reduce((acc, user) => {
	if (!acc[user.role]) {
		acc[user.role] = [];
	}
	acc[user.role].push(user);
	return acc;
}, {});
console.log(grouped);