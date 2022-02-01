let img = document.querySelector('#test');
let imageLoader = new Promise((resolve, reject) =>{
    img.addEventListener('load', () => resolve());
    img.addEventListener('error', () => reject());
})

imageLoader
.then(()=> console.log('로딩 성공'))
.catch(() => console.log('로딩 실패'))