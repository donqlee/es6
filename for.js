//forEach() 반복문 (Array 전용)
//for in 반복문 (object 전용)
//for of 반복문 (iterable 전용)
class Parents {

}
Parents.prototype.name = "Huh";

// let obj = new Parents();
let obj = { name : 'Lee', age : 35};

//forEach
[1,2,3].forEach((a) => console.log(a));

//for in
//1. enumerable한 것만 반복해준다.
//2. 부모의 prototype도 반복해준다.
for(let key in obj){
    console.log(obj[key])
}

//for of
//Array, 문자, arguments, NodeList, Map, Set
let arr = [2,3,4,5];
for (let data of arr){
    console.log(data);
}
for (let data of 'apple'){
    console.log(data);
}