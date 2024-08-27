let on = document.querySelector('.on');
let img = document.querySelector('.img');
let Off = document.querySelector('.off');
on .addEventListener('click',function(){
img.src ="https://www.w3schools.com/js/pic_bulbon.gif"
})

Off.addEventListener('click',function(){
    img.src ="pic_light.gif"
})