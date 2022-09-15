// Write all the Javascript here
let dataArr = [];
let total = 0;

document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    
    let Pname = document.querySelector("#name").value;
    let Pcatagory = document.querySelector("#category").value ;
    let Pbrand = document.querySelector("#brand").value;
    let Pprice = document.querySelector("#price").value;
    let Pdelivery = document.querySelector("#deliveredBy").value;
    let dataObj = {
        name:Pname,catagory:Pcatagory,brand:Pbrand,price:Pprice,delivery:Pdelivery,
    }

dataArr.push(dataObj);
 
total+= Number(Pprice);
document.querySelector("#total-price").innerText=total;
display(dataArr);

})

function display(dataArr){
    document.querySelector("tbody").innerHTML="";
    dataArr.map(function(elem){
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText=elem.name;
        let td2 = document.createElement("td");
        td2.innerText=elem.catagory;
        let td3 = document.createElement("td");
         td3.innerText=elem.brand;
       let td4 = document.createElement("td");
       td4.innerText=elem.price;
        let td5 = document.createElement("td");
        td5.innerText=elem.delivery;
        let td6 = document.createElement("td");
        if(elem.price>100){
            td6.innerText="Expenssive";
        }else{
            td6.innerText="Non-Expenssive"; 
        }
        let td7 = document.createElement("td");
        td7.innerText="Delete";
        td7.style.color="red";
        td7.addEventListener("click",function(event){
            event.target.parentNode.remove();
            total= total-Number(elem.price);
            document.querySelector("#total-price").innerText=total;
        })
let tbody = document.querySelector("tbody");
      tr.append(td1,td2,td3,td4,td5,td6,td7);
      tbody.append(tr);
        
    })
}