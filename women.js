function show(){
    document.getElementById('sidebar').classList.toggle('active');
}
// let form = document.querySelector('form');
let btnn = document.getElementById('srcbtn');
let val = document.getElementById('searchval');

btnn.addEventListener('click',function(e){
e.preventDefault();
let a = val.value;
console.log(a)  
let arr = a;
localStorage.setItem('src',JSON.stringify(arr)); 
location.replace('./search.html');
})


let cart = document.getElementById('basket');
cart.addEventListener('click',()=>{
    location.replace('./cart.html');
})

let select = document.querySelector(".question");
let select2 = document.querySelector(".browsecat");
// select.forEach(element => {
//     element.addEventListener('click',()=>{
//         element.classList.toggle('active')
//     })
// });




// filter js
async function fetchapi(){
let url = await fetch('https://63c8bafd075b3f3a91e5c84d.mockapi.io/product');
let data = await url.json(); 
console.log(data);
let arr = [];
for(let i=0;i<data.length;i++){
    if(data[i].category == 'women'){
        arr.push(data[i]);
    }
}
appenddata(arr);
}
fetchapi();


let min = document.getElementById('min');
let max = document.getElementById('max');
let btn = document.getElementById('sortmin');
btn.addEventListener('click',()=>{
console.log(min.value,max.value);
fetchapifilter(min.value,max.value);
})
async function fetchapifilter(min,max){
let url = await fetch('https://63c8bafd075b3f3a91e5c84d.mockapi.io/product');
let data = await url.json(); 
console.log(data);
let arr = [];
for(let i=0;i<data.length;i++){
    if(data[i].category == 'women' && (+data[i].price)>=min && (+data[i].price)<=max){
        arr.push(data[i]);
    }
}
console.log(arr);
appenddata(arr);
}



// sorting js

let sorting = document.getElementById("sorting");
sorting.addEventListener('change',()=>{
console.log(sorting.value);
fetchapi3(sorting.value);
})

async function fetchapi3(value){
let url = await fetch('https://63c8bafd075b3f3a91e5c84d.mockapi.io/product');
let data = await url.json(); 
console.log(data);
let arr = [];
for(let i=0;i<data.length;i++){
    if(data[i].category == 'women'){
        arr.push(data[i]);
    }
}

let newarr = [];
if(value == 'low'){
function comparee(a,b){
    let aa = getvalue(a);
    let bb = getvalue(b);
    return aa-bb;
}
function getvalue(ele){
    return +(ele.price) 
}
newarr = arr.sort(comparee)
}
else{
    function comparee(a,b){
    let aa = getvalue(a);
    let bb = getvalue(b);
    return bb-aa;
}
function getvalue(ele){
    return +(ele.price) 
}
newarr = arr.sort(comparee)
}

console.log(newarr);
appenddata(newarr);
}


function appenddata(arr){
let bodyel = document.querySelector('.bdyright');
bodyel.innerHTML = ""; 
// JSON.parse(localStorage.getItem('product')) = [];
let newarr = [];
arr.forEach((element,index) => {   
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.src = element.image;
    let p1 = document.createElement('p');
    p1.textContent = 'NEW';
    let a2 = document.createElement('a');
    a2.addEventListener('click',()=>{
        newarr.push({...element});
        localStorage.setItem('product',JSON.stringify(newarr));
    })
    a2.href = "./product.html";
    a2.textContent = element.title;
    let p3 = document.createElement('p');
    p3.textContent = `$${element.price}`;
    let p4 = document.createElement('p');
    p4.textContent = element.rating;
    let p5 = document.createElement('p');
    p5.textContent = "Buy 1, Get 1 50% Off";
    div.append(img,p1,a2,p3,p5,p4);
    bodyel.append(div);
});
}


function show2(){
    document.getElementById('sidebar2').classList.toggle('active');
}
function redilog(){
    location.replace('./login.html')
}
let sss = document.getElementById('btn111');
        sss.addEventListener('click',()=>{
        location.replace('./signup.html');
        })