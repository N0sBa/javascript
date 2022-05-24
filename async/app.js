function sendHttpRequest(method, url, data) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("URL RQ: ", url);
            console.log("Response: ", xhr.response);
            return xhr.response;
        } else {
            throw new Error("Logic failed");
        }
    };
    xhr.onerror = function () {
        throw new Error('Fail to send request');
    };
    xhr.send(JSON.stringify(data));
}

function getDataA() {
    const promise = new Promise((rs, rj) => {
        const params = {
            title: "witcher",
            body: "swords"
        };
        const reponse = sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts?userId=1');
        rs(reponse);
    });
    return promise;
}

function getDataB() {
    const promise = new Promise((rs, rj) => {
        const params = {
            title: "witcher",
            body: "swords"
        };
        const response = sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts/2');
        rs(response);
    });
    return promise;
}

async function init() {
    const res2 = await getDataB();
    const res1 = await getDataA();
}

// function init() {
//     getDataA()
//     .then(()=>{
//         return getDataB();
//     }).then(()=>{
//         console.log("END");
//     }).catch(error=>{
//         console.log(error);
//     });
// }

init();