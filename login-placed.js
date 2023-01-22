let arr3 = JSON.parse(localStorage.getItem('login'))||[];
    let form = document.querySelector('form');
    form.addEventListener('submit',()=>{
        event.preventDefault();
        let email = form.email.value;
        let pass = form.pass.value;
        console.log(arr3[0].email == email)
        console.log(arr3[0].password ==  pass)
        console.log(email,pass)
        let flag = false;
        for(let i=0;i<arr3.length;i++){
        if(arr3[i].email == email && arr3[i].password == pass){
            alert('Logged in')
            location.replace('./index.html');
            let a = "login";
            flag = true;
            localStorage.setItem('cc',JSON.stringify(a));
        }
    }   
    if(flag == false){
    alert("wrong password")
    } 
    })
