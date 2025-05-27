let items=[
    12,
    23.34,
    true,
    'Ram',
    {Sid:1,Sname:'Cherri'},
    ()=>5
];
console.log(items[0]);
console.log(items[2]);
console.log(items[5]()); // Calling the function stored in the array
console.log(items[4].Sid); // Accessing property of the object in the array
console.log(`ID:${items[4].Sid} Name:${items[4].Sname}`) // Template literal to format output