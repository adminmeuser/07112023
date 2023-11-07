                     //TASK 1

function validateForm(){
    let formValue=document.getElementById('validationForm');
    let userName=formValue.elements['username'].value;
    let email=formValue.elements['email'].value;
    let number=formValue.elements['number'].value;
    let password=formValue.elements['password'].value;
    let password1=formValue.elements['password2'].value;

    if (userName==null || userName==''){
        alert('Username is required');}
        else if (email==null || email==''){
            alert('Email id is required');
        }
        else if (number==null || number==''){
            alert('Mobile number is required');
        }
        else if (number.length<10){
            alert('Enter a valid mobile number');
        }
        else if (password==null || password==''){
            alert('password is required');
            
        }
        else if (password.length<5){
            alert('Password is too short');
        }
        else if (password!=password1){
            alert('Incorrect password');
        }

    }

    //TASK 2

    //for loop
    let a = "";
    for(let i=0;i<10;i++){
        a += i + " ";
    }

    document.getElementById("array").innerHTML = a;
  
  

    //while loop

    let b = "";
    let i = 0;
    while (i<10) {
        b += " " + i;
        i++;
    }

    document.getElementById("array2").innerHTML = b;

   // do while loop

   let c = ""
let x = 0;

do {
  c += " "+ x;
  x++;
}
while (x < 10);  

document.getElementById("array3").innerHTML = c;

//break

let d = "";
for(let i=0;i<10;i++){
    if (i===5) { break; }
    d += i + " ";
}
document.getElementById("array4").innerHTML = d;

//continue

let e = "";
for(let i=0;i<10;i++){
    if (i===5) { continue; }
    e += i + " ";
}
document.getElementById("array5").innerHTML = e;