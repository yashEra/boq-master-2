let menu = document.querySelector('.navbar');
let button = document.querySelector('.fa-bars');

document.querySelector('#menu-btn').onclick = () =>{
   menu.classList.toggle('active');
   button.classList.toggle('active1');
}