
let email=document.querySelector("#email")
let Fname=document.querySelector("#firstname");
let Lname=document.querySelector("#lastname");
let pass=document.querySelector("#password")
let button=document.querySelector("button")
let arr=JSON.parse(localStorage.getItem("loginData"));
button.addEventListener("click",()=>{
    if(button.innerText=="CONTINUE"){
        if(email.value=="")
        alert("Enter Email")
        else{
            if(arr==null){
                signUP()
            }
            else{
                let already=false;
                for(let i=0;i<arr.length;i++)
                {
                    if(email.value==arr[i].email)
                    {
                        already=true;
                        break;
                    }
        
                }
                if(already==false)
                signUP();
                else{
                    pass.style.display="block"
                    button.innerText="SIGN IN"
                }
            }
        }
    }
    else if(button.innerText=="SIGN UP")
    {
        if(email.value==""&&Fname.value==null&&Lname==null&&pass.value==null){
            alert("Please Fill the form")
        }
        else{
            let obj={
                email:email.value,
                first_name:Fname.value,
                last_name:Lname.value,
                password:pass.value,
            }
            if(arr==null)
            arr=[];
            arr.push(obj);
            localStorage.setItem("loginData",JSON.stringify(arr));
            location="./index.html"
        }
    }
    else{
        if(email.value==""&&pass.value==null){
            alert("Please Fill the form")
        }
        else{
            let checkPass=false;
            for(let i=0;i<arr.length;i++)
                {
                    if(arr[i].email==email.value&&arr[i].password==pass.value)
                    {
                        checkPass=true;
                        break;
                    }
                }
                if(checkPass==true){
                    localStorage.setItem("login",email.value)
                    location="./index.html"
                }
                else
                alert("Wrong Email or Password")
        }
    }
})
function signUP(){
    Fname.style.display="block";
        Lname.style.display="block";
        pass.style.display="block"
        button.innerText="SIGN UP"
}