
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase=uppercase.toLowerCase();
const numbers="1234567890"
const symbols="@#$%&"
const allchar=lowercase+uppercase+numbers+symbols
let passwordbox=document.getElementById("password")
let passlength=12;
let copy_icon=document.getElementById("copy")



function generate(){
    let password="";
    copy_icon.src="pic/copy.png"
    password+=lowercase[Math.floor(Math.random()*lowercase.length)]
    password+=uppercase[Math.floor(Math.random()*uppercase.length)]
    password+=numbers[Math.floor(Math.random()*numbers.length)]
    password+=symbols[Math.floor(Math.random()*symbols.length)]

    while(password.length<12){
        password+=allchar[Math.floor(Math.random()*allchar.length)]
}

passwordbox.textContent=password

}

function copying(){

  
if(passwordbox.textContent)

    {
        navigator.clipboard.writeText(passwordbox.textContent)
        copy_icon.src="pic/checked.png"
        console.log("yes")
       
    }
    else{
    console.log("yes")
alert("Generate password to copy")

    }
}




