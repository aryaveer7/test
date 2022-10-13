let form = document.querySelector("form");
let LSData = JSON.parse(localStorage.getItem("admission")) || [];

form.addEventListener("submit",function(event){
    event.preventDefault();
    let obj = {
        name:form.name.value,
        email:form.email.value,
        phone:form.phone.value,
        gender:form.gender.value,
        course:form.course.value,
    }

LSData.push(obj);
localStorage.setItem("admission",JSON.stringify(LSData));


})