function show(){
    document.getElementById('sidebar').classList.toggle('active');
}
function show2(){
    document.getElementById('sidebar2').classList.toggle('active');
}
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

function redilog(){
    location.replace('./login.html')
}