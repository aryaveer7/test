let tbody = document.querySelector("tbody")
// arr = ["Accepted","rejected"];
function renderDom(data,arr,onClick){
tbody.innerHTML = null;
data.map(function(ele,index){
let tr = document.createElement("tr");
let name = document.createElement("td");
name.textContent= ele.name;
let email = document.createElement("td");
email.textContent = ele.email;
let phone = document.createElement("td");
phone.textContent = ele.phone;
let gender = document.createElement("td");
gender.textContent = ele.gender ;
let course = document.createElement("td");
course.textContent = ele.course;
tr.append(name,email,phone,gender,course);
if(arr!= undefined){
    arr.forEach(function(el){
     let button = document.createElement("td");
     button.innerText = el;
     button.addEventListener("click",function(){
        onClick(el,index);
     })
     tr.append(button);
    })
}



tbody.append(tr)


})



}