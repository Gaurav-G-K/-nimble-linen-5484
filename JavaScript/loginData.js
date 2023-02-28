
let email=document.querySelector("#email")
let name=document.querySelector("#name");
let image=document.querySelector("#image");
let phone=document.querySelector("#phone");
let pass=document.querySelector("#password");
let Gender=document.querySelector("#Gender");
let gender=document.getElementsByName("gender");
let passAgain=document.querySelector("#Againpassword")
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
        if(email.value==""&&name.value==null&&image==null&&pass.value==null&&phone.value==null&&passAgain==null){
            alert("Please Fill the form")
        }
        else{
            let PGender;
            if(gender[0].checked)
            PGender=gender[0].value;
            else
            PGender=gender[1].value;
            let obj={
                email:email.value,
                name:name.value,
                image:image.value,
                phone:phone.value,
                gender:PGender,
                password:pass.value,
                cart:[],
                favorite:[]
            }
            if(arr==null)
            arr=[];
            arr.push(obj);
            localStorage.setItem("loginData",JSON.stringify(arr));
            localStorage.setItem("login",email.value)
            async function fetchData(){
                try {
                    await fetch('https://63f63abd59c944921f6ff45a.mockapi.io/users',{
                        method: "POST",
                        headers: {
                        'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(obj)
                    });
                    location="./index.html"
                } catch (error) {
                    console.log(error)
                }
            }
            fetchData()
            
            
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
    name.style.display="block";
        image.style.display="block";
        phone.style.display="block";
        Gender.style.display="flex";
        pass.style.display="block";
        passAgain.style.display="block";
        button.innerText="SIGN UP"
}