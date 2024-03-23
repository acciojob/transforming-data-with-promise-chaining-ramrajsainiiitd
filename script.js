let input = document.getElementById('ip');
let start = document.getElementById('btn');
let output = document.getElementById('output');

start.addEventListener("click", () => {
    let promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve(Number(input.value));
        }, 2000);
    });

    promise1.then((num) => {
        output.textContent = `Result: ${num}`;
        return num;
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num);
            }, 2000);
        });
    })
    .then((num) => {
        output.textContent = `Result: ${num}`;
        return num;
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num*2);
            }, 1000);
        });
    })
    .then((num) => {
        output.textContent = `Result: ${num}`;
        return num;
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num-3);
            }, 1000);
        });
    })
    .then((num) => {
        output.textContent = `Result: ${num}`;
        return num;
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num/2);
            }, 1000);
        });
    })
    .then((num) => {
        output.textContent = `Result: ${num}`;
        return num;
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num+10);
            }, 1000);
        });
    })
    .then((num) => {
        output.textContent = `Final Result: ${num}`;
        return num;
    })
    .catch((error) => {
        console.error(error);
    });
});
