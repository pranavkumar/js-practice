

async function getData() {
    return new Promise(function (resolve, reject) {
        resolve(1);
    })
}

async function getIncrement(arr) {
    return Promise.all(arr.map(item => {
        return new Promise((resolve, reject) => {
            resolve(item + 1);
        })
    }));
}

// getData().then((data) => console.log(data));
// getIncrement([1, 2, 3, 4, 5]).then((data) => console.log(data));

(async function(){
    let data = await getIncrement([3, 4, 5, 6]);
    console.log(data);
})();

