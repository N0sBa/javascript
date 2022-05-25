const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retreive-btn');

storeBtn.addEventListener('click', () => {
  const userId = 'user123';
  const user = {name: 'Max', age: 30}
  document.cookie = `uid=${userId}; max-age=2`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener('click', () => {
  const cookieData = document.cookie.split(';');
  const data = cookieData.map(i => {
    return i.trim();
  });
  console.log(data);
});