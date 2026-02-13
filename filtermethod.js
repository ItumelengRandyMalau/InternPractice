/// JavaScript source code
//cretate users array using const
const users = [
    { name: "Randy", isActive: true },
    { name: "Pam", isActive: false },
    { name: "Linda", isActive: true },
    { name: "Tom", isActive: false }
];
//filter active users

const activeUsers = users.filter(user => user.isActive);
console.log(activeUsers);

/*// Output: [ { name: 'Randy', isActive: true }, { name: 'Linda', isActive: true } ]
// using map() to get names of active users
// output only names of active users
const activeUserNames = activeUsers.map(user => user.name);
console.log(activeUserNames);


const users = [
    { name: "A", role: "admin", active: true, purchases: 300 },
    { name: "B", role: "user", active: false, purchases: 200 },
    { name: "C", role: "admin", active: true, purchases: 400 },
    { name: "D", role: "user", active: true, purchases: 150 }
];

//use reduce with object
//filter !user.role
//set role key and it's value
//return acc
//output example admin:700, user:150

const totalsByRole = users.reduce((acc, user) => {
    if (!acc[user.role]) {
        acc[user.role] = 0; 
    }
    acc[user.role] = + user.purchases;
    return acc;
}, {});
console.log(totalsByRole);
*/