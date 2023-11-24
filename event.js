const push = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click',() => {
  push.textContent = 'ボタンをクリックしました';
  setTimeout('btn',2000);
})
