let symbol = Symbol('설명');

// 심볼의 용도 : Object 자료형의 비밀스런 key 값
let weight = Symbol('내 시크릿 몸무게임');
let height = Symbol('내 키임');
let person = { name : 'Lee', [height] : 182};
//비밀스런 데이터를 저장하고 싶으면? 
person[weight] = 94; //반복문에 출력 안됨 (enumerable X)
// person[height] = 182;
for(let key in person){
    console.log(person[key])
}

//Symbol 특징
//1. 설명이 같다고 같은 Symbol이 아님
//2. 전역변수같은 전역 Symbol

let a = Symbol('설명1');
let b = Symbol('설명1');

let c = Symbol.for('설명1'); //전역 Symbol
let d = Symbol.for('설명1'); //c === d  true

