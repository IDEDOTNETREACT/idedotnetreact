let users = [
    { id: 1, name: 'Tim', salary: 1200 },
    { id: 2, name: 'John', salary: 15000 },
    { id: 3, name: 'Suren', salary: 20000 },
    { id: 4, name: 'Tony', salary: 13000 },
]
//Find
//returns first value in the array that matches the condition
let user = users.find(i => i.id>1)
if (user != null)
    console.log(user.name);
else
    console.log('Invalid Id')

//Filter
//return multiple values from the array that matches the condition
let arr=users.filter(i=>i.salary>13000)
console.log(arr);
