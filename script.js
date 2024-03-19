//your JS code here. If required.
let input = document.getElementById('ip');
let start = document.getElementById('btn');
let output = document.getElementById('output');

start.addEventListener("click",()=>{
  let promise1 = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(Number(input.value));
    },2000);
  });

  promise1.then((num)=>{
    output.textContent = `Result: ${num}`;
    console.log("promise1:");
    return num;
  }).then((num)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(num*2);
        }, 1000);
    });
  }).then((num)=>{
    output.textContent = `Result: ${num}`;
    console.log("promise2:");
    return num;
  }).then((num)=>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(num-3);
      }, 1000);
    });
  })
    .then((num)=>{
      output.textContent = `Result: ${num}`;
      console.log("promise3:");
      return num;
    })
    // promise 4
    .then((num)=>{
      return new Promise((resolve)=>{
        resolve(num/2);
      }, 1000);
    }).then((num)=>{
      output.textContent = `Result: ${num}`;
      console.log("promise4:");
      return num;
    })
    // promise 5
    .then((num)=>{
      return new Promise((resolve)=>{
        resolve(num + 10);
      }, 1000);
    }).then((num)=>{
      output.textContent = `Result: ${num}`;
      console.log("promise5:");
    }).catch((e)=>{
console.log(e);
    })
});