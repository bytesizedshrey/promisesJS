// state -> pending, fulfilled, rejected

// const promise = new Promise((resolve, reject)=> {
//     //setTimeout(() => resolve(2,1000 )) //fulfills the promise and sets its value.
//     setTimeout(() => reject(new Error('Something went wrong')),1000 )
// });

const promise = Promise.resolve(3);

console.log(promise);

const promise2 = Promise.resolve(7);
Promise.all([
    Promise.resolve(7),
    Promise.reject(9),
    new Promise((res, rej) => setTimeout(() => res(5), 1000))
]).then(console.log).catch(console.log);

//setTimeout(() => console.log(promise),1500)
//promise.then(value => console.log(value), error => console.log('Oh No ' + error));
promise
.then(value => value * 2)
.then(value => value + 1)
.then(value => {
    throw new Error('Something went wrong');
})
.then(console.log)
//to catch error 
.catch(error => {
    console.log('Oh No ' + error);
    return 10;
})
.then(console.log)
.finally(() => console.log('Done'));


//Async
async function tester(){
    return await new  Promise((res,rej)=>{
        setTimeout(()=> res(3), 1000);
    });
}
tester().then(console.log).catch(error => console.log('Oh No ' + error));
 
