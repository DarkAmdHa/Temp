const amount = document.querySelector('.amount');
const link = document.querySelector('.link');
const leftColumn = document.querySelector('.prepu-column-inner-left');
const rightColumn = document.querySelector('.prepu-column-inner-right');

document.querySelector('.prepu-column-inner-left').addEventListener('click', function(){
  link.setAttribute('href','http://tinystuds.com/cart/40185303498939:1,40605506568379:1?discount=earlybird38');
  amount.innerText = '19';
  rightColumn.classList.remove('selected');
  leftColumn.classList.add('selected');
  document.querySelector('.radio-left').checked = 'checked';
});

document.querySelector('.prepu-column-inner-right').addEventListener('click', function(){
  link.setAttribute('href','http://tinystuds.com/cart/40185303498939:1,40602300022971:1?discount=earlybird38');
  amount.innerText = '23';
  rightColumn.classList.add('selected');
  leftColumn.classList.remove('selected');
  document.querySelector('.radio-right').checked = 'checked';
});
