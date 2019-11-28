// 
// 
// 
const promise1 = new Promise(resolve => setTimeout(() => resolve(123), 1000));

console.log(promise1);

promise1.then(result => console.log(result));


// 
// 
// 
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('inpromise error')), 1000));

console.log(promise2);

promise2.then(() => console.log('promise2 rejected then'))
  .catch(err => console.log(err));


// 
// 
// 
(async () => {
  const promise3 = new Promise(resolve => setTimeout(() => resolve('promise 3 result'), 1000));

  const promise3Result = await promise3;
  console.log(promise3Result);
})();


// 
// 
// 
(async () => {
  const promise4 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('promise4 error')), 1000));

  try {
    const promise4Result = await promise4;
    console.log(promise4Result);
  } catch(e) {
    console.log(e);
  }
})();
