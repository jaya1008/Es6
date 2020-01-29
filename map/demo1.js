//why we need map

const x={};
const a={};
const b={
    num:1
}

x[a]='a';
console.log(x[a]);
x[b]='b';
console.log("hi");
console.log(x); 
//Javascript Object Support only one key Object can't support mutiple
//If we provide mutiple then always take last