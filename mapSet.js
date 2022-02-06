//Map 자료형
let person = new Map();
person.set('name', 'Lee');
person.set('age', 35);
// Map 자료형은 자료간의 연관성을 표현하기 위해 씁니다.
// Object 자료형은 자료 이름으로 글자만 가능, Map 자료형은 다 가능
person.set(100, '숫자');
person.set([1,2,3], '배열');

//Map에서 자료 꺼재는법
person.get('age');
//Map 삭제하는법
person.delete('age');
//자료 갯수 세는법 
person.size
//반복문으로 Map에서 자료 꺼내는법
for(let key of person.keys()){
    console.log(key)
}
//Map 자료형에 직접 자료 집어 넣을땐 
let sonson = new Map([
    ['name', 'Son'],
    ['age', 32]
]);

//Set 자료형
let name = ['donq', 'sonson', 'jun', 'jun'];
//중복자료를 허용하지 않는 Array 비슷한 것
let name2 = new Set(['donq', 'sonson', 'jun', 'jun']);

//Set 자료형에 자료 추가하기 
name2.add('Lee');
name2.delete('Lee');
name2.has('Lee');
name2.size

//Set 자료형 <-> Array 자료형
let name3 = new Set(name);
let name4 = [...name3];