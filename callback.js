'use strict';

//JavaScript is synchronous.
//Execute the code block in order after hoisting.
//hoisting: var, function declaration
console.log('1');
setTimeout(() => console.log('2'), 1000)
console.log('3');

// Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));
// Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); 

// Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'donq' && password == '0930') ||
                (id === 'sonson' && password == '1004')
            ) {
                onSuccess(id);
            } else{
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if (user === 'donq'){
                onSuccess({name: 'donq', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);

    }
}

const id = prompt('enter your id');
const password = prompt('enter your password');
const userStorage = new UserStorage();

userStorage.loginUser(
    id,
    password,
    (user) => {
        userStorage.getRoles(
            user,
            (user) => {
                console.log(user.name, user.role);
            },
            (error) => {
                console.log(error);
            }
        )
    },
    (error) => console.log(error)

)