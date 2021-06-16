const amount = document.querySelector('.amount');
const link = document.querySelector('.link');
const leftColumn = document.querySelector('.prepu-column-inner-left');
const rightColumn = document.querySelector('.prepu-column-inner-right');

document.querySelector('.radio-left').addEventListener('click', function(){
  link.setAttribute('href','http://tinystuds.com/cart/40185303498939:1,40605506568379:1?discount=earlybird38');
  amount.innerText = '19';
  rightColumn.classList.toggle('selected');
  leftColumn.classList.toggle('selected');
});

document.querySelector('.radio-right').addEventListener('click', function(){
  link.setAttribute('href','http://tinystuds.com/cart/40185303498939:1,40602300022971:1?discount=earlybird38');
  amount.innerText = '23';
  rightColumn.classList.toggle('selected');
  leftColumn.classList.toggle('selected');
});
