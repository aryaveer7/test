let arr = [1,2,3,4,5,100,6,50];
let arr2 = arr.map(function(el){
    return el;
})
let sorted = arr2.sort(function(a,b){
return a-b;
})
console.log(arr2);

