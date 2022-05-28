const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retreive-btn');

const dbRequest = indexedDB.open('StorageDB', 1);
let db;

dbRequest.onsuccess = function (event) {
  db = event.target.result;
}

dbRequest.onupgradeneeded = function (event) {
  db = event.target.result;

  const objStore = db.createObjectStore('products', {keyPath: 'id'});

  objStore.transaction.oncomplete = function(event) {

    // const productStore = db.transaction('products', 'readwrite').objectStore('products');
    // productStore.add({
    //   id: 'p1',
    //   title: 'A 1st product',
    //   price: 12.18,
    //   tax: 8,
    //   tags: ['Fruite']
    // });
    // productStore.add({
    //   id: 'p2',
    //   title: 'A 1st product',
    //   price: 12.18,
    //   tax: 8,
    //   tags: ['Fruite']
    // })
  }
  // console.log()
};

dbRequest.onerror = function () {
  console.log(error);
}

storeBtn.addEventListener('click', () => {
    const productStore = db.transaction('products', 'readwrite').objectStore('products');
    productStore.add({
      id: 'p1',
      title: 'A 1st product',
      price: 12.18,
      tax: 8,
      tags: ['Fruite']
    })
});

retrBtn.addEventListener('click', () => {
  const productStore = db.transaction('products', 'readwrite').objectStore('products');
  const request = productStore.get('p1');

  request.onsuccess = function() {
    console.log(request.result);
  }
});