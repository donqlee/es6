// async를 function 앞에 붙이면 함수 실행 후에 Promise 오브젝트가 남는다.
// 성공만 가능

async function plus(){
   return 1 + 1;
}

plus().then((결과) => {
    console.log('성공');
    console.log(결과);
})
// async function 안에서 쓰는 await는 then 대신 사용 가능
async function await(){
    let promise = new Promise((resolve, reject) => {
        let tough = 1 + 1;
        //resolve(tough);
        reject(tough);
    });
    // promise.then(() => console.log('성공했어요'))
    try{ 
        let result = await promise;
        console.log(result);
    } catch{
        console.log('프로미스 연산이 잘안되었군요')
    }

}

await();

async function buttonClick(){
    let click = new Promise((resolve, reject) => {
        let button = document.querySelector('#button')
        button.addEventListener('click', () => {
            let word = '성공';
            resolve(word);
        });
    })

    try{
        let result = await click;
        console.log(result);
    } catch{
        console.log('실패')
    }
}

buttonClick();