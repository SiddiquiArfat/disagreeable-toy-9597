function show(){
    document.getElementById('sidebar').classList.toggle('active');
}
function show2(){
    document.getElementById('sidebar2').classList.toggle('active');
}
function redilog(){
    location.replace('./login.html')
}
let cart = document.getElementById('basket');
cart.addEventListener('click',()=>{
    location.replace('./cart.html');
})
// let form = document.querySelector('form');
let btn = document.getElementById('srcbtn');
let val = document.getElementById('searchval');

btn.addEventListener('click',function(e){
    e.preventDefault();
 
    let a = val.value;
    console.log(a)  
    let arr = a;
    localStorage.setItem('src',JSON.stringify(arr)); 
    location.replace('./search.html');
})
let sss = document.getElementById('btn111');
sss.addEventListener('click',()=>{
    location.replace('./signup.html');
})