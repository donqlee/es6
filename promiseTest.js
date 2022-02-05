//Q1. <img> 이미지 로딩 성공시 특정 코드르 실행하고 싶습니다.

let imageLoader = new Promise((resolve, reject) => {
    let img = document.querySelector('#test');
    img.addEventListener('load', () => resolve());
    img.addEventListener('error', () => reject());
});
imageLoader
.then(() => console.log('로딩 성공'))
.catch(() => console.log('로딩 실패'))

//Q2. Ajax 요청이 성공하면 무언가 코드를 실행하고 싶습니다. 

// $.ajax({
//     type: 'GET',
//     url: 'https://codingapple1.github.io/hello.txt'
// }).done((결과) => console.log(결과));

// $.get('https://codingapple1.github.io/hello.txt')
// .done((결과) => console.log(결과));

let ajaxPromise = new Promise((resolve, reject) => {
    $.get('https://codingapple1.github.io/hello.txt')
    .done((결과) => resolve(결과));
})
ajaxPromise.then((결과) => console.log(결과))

//Q3. Promise chaining
let promiseChaining = new Promise((resolve, reject) => {
    $.get('https://codingapple1.github.io/hello.txt')
    .done((결과) => resolve(결과))
})
promiseChaining
.then((결과) => {
    console.log(결과)
    return new Promise((resolve, reject) => {
        $.get('https://codingapple1.github.io/hello2.txt')
        .done((결과) => resolve(결과))
    })
})
.then((result) => console.log(result));

// 함수 만들기 
function ajax(URL){
    return new Promise((resolve, reject) => {
        $.get(URL)
        .done((결과) => resolve(결과))
    })
}