// Map using constructor
const a={}
const b={
    num:1
};

const map=new Map();
console.dir(map) //get complete methods includiing inherited one
map.set(a,'a');
map.set(b,'b');

//Another Syntax for adding key is 
map.set(a,'c').set(b,'b');
//Map allows us to store unique only 
//If same key provided it will override the previous one


map.delete(b) //to remove value using key suppling

map.set(b,'b');
console.dir(map);

//Using Iterator to iterate the map

for(let [key,value] of map.entries())
{
    console.log(key,value);
}

//convert into Array

const ary=[...map];

console.log(ary);