


let singinBox = document.querySelector("#singin_box");
let singupBox = document.querySelector("#singup_box");
let singinBtn = document.querySelector("#singinbtn");
singinBtn.addEventListener("click",function(){
    singinBox.style.display="block";
    singupBox.style.display="none";
})

let singupBtn = document.querySelector("#singupbtn");
singupBtn.addEventListener("click",function(){
    singinBox.style.display="none";
    singupBox.style.display="block";
})

let dataObj;
//collect the data
let formup = document.querySelector("#singupForm");
formup.addEventListener("submit",function(event){
    event.preventDefault();
     dataObj = {
        name:document.querySelector(".name").value,
        email:document.querySelector(".email").value,
        password:document.querySelector(".password").value
    }
displayForm(dataObj);
    alert("singup Successful");
    
});

let nav = document.querySelector("nav");

function displayForm(dataObj){
    singinBox.style.display="block";
    singupBox.style.display="none"
    console.log(dataObj);
    document.querySelector("#singinForm").addEventListener("submit",function(event){
        event.preventDefault();
        let emailin = document.querySelector(".emailin").value;
        let passwordin = document.querySelector(".passwordin").value;

        if(dataObj.email != emailin && dataObj.password != passwordin){
            alert("Enter Valid Email id and Password");
        }else if(dataObj.email != emailin){
            alert("Enter a Valid Email Id");
        }else if(dataObj.password != passwordin){
            alert("Enter a Valid Password");
        }else{
            alert("Log In Successful");
        nav.innerHTML= null;
        let div = document.createElement("div");
        div.innerText = dataObj.name[0];
        nav.append(div);


        }
       
    })

}


