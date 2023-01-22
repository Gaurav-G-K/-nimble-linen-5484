let checkLogin=localStorage.getItem("login")

if(checkLogin!=null);
{
    let data=JSON.parse(localStorage.getItem("loginData"))
    let login=document.querySelector("#login")
    for(let i=0;i<data.length;i++){
        if(data[i].email==checkLogin)
        {
            login.innerHTML=`${data[i].first_name[0]}${data[i].last_name[0]}`
            login.removeAttribute("class","load")
            let ul=document.createElement("ul")
            let logout=document.createElement("li")
            logout.innerText="Sign Out";
            ul.append(logout)
            login.append(ul)
            let j=0;
            login.addEventListener("click",()=>{
                if(j%2==0)
                logout.style.display="inline-block"
                else
                logout.style.display="none"
                logout.addEventListener("click",()=>{
                    localStorage.removeItem("login");
                    location.reload(true)
                })
                j++;
            })

            break;
        }
    }
}
document.querySelector(".load").addEventListener("click",()=>{
    location="./LogInAndUp.html"
})