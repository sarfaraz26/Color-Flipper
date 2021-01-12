colors = ['#fffff','rgb(30, 161, 184)','rgb(194, 39, 194','rgb(238, 17, 54)','rgb(10, 243, 10)','rgb(56, 50, 50)','rgb(250, 70, 4)'];
let btn = document.getElementById('btn');
let body = document.querySelector('body');

btn.addEventListener('click',()=>
{
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
});








