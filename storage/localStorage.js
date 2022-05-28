const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retreive-btn');

const userId = 'sonnb123';
const user = {
  name: 'Son',
  age: 24,
  hooblies: ['football']
};

storeBtn.addEventListener('click', () => {
  sessionStorage.setItem('userId', userId);
  sessionStorage.setItem('user', JSON.stringify(user));
});

retrBtn.addEventListener('click', () => {
  const extractedId = sessionStorage.getItem('userId');
  const extractedUser = sessionStorage.getItem('user');
  console.log('User: ', JSON.parse(extractedUser));
  if (extractedId) console.log('UserId: ', extractedId);
  else console.log('Extracted data not a thing!');
});