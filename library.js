let a = 10;
let b = 20;
let c = 30;

//1. export default 문법
// import 가져올거 from '경로'
//export default 내보낼거

//export default a; 

// 2. 여러개를 내보내는 export 문법
//import {가져올것들} from '경로'
//export {내보낼것들}
export {a, b};
export default c;


//3. export 와 export default 동시 사용 가능