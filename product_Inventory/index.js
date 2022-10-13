
let totalPrice = 0;
let dataArr = [];


document.querySelector("form").addEventListener("submit",function(event){
event.preventDefault();
let dataObj = {
    pName:document.querySelector("#name").value,
    pCategory:document.querySelector("#catagory").value,
    pBrand:document.querySelector("#brand").value,
    pPrice:document.querySelector("#price").value,
    pDeliveredBy:document.querySelector("#deliveredBy").value,
}

dataArr.push(dataObj);

// console.log(dataArr);

displayTable();

totalPrice=totalPrice+Number(dataObj.pPrice);
document.querySelector("#total-price").innerText = totalPrice;

})

function displayTable(){
    document.querySelector("tbody").innerHTML= "";
    dataArr.map(function(elem,index){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText=elem.pName;
        let td2 = document.createElement("td");
        td2.innerText=elem.pCategory;
        let td3 = document.createElement("td");
        td3.innerText=elem.pBrand;
        let td4 = document.createElement("td");
        td4.innerText=elem.pPrice;
        
        let td5 = document.createElement("td");
        td5.innerText=elem.pDeliveredBy;
        let td6 = document.createElement("td");
        if(elem.pPrice>100){
            td6.innerText= "Expensive";
        }else{
            td6.innerText= "Not-Expensive";
        }
        let td7 = document.createElement("td");
        td7.innerText="Delete";
        td7.addEventListener("click",function(){
            deletArr(dataArr,index);

            
           
            totalPrice= totalPrice-Number(elem.pPrice);
            document.querySelector("#total-price").innerText = totalPrice;
        });
        tr.append(td1,td2,td3,td4,td5,td6,td7);
        document.querySelector("tbody").append(tr);
        
    })

    function deletArr(arr,index){
        dataArr = arr.filter(function(el,i){
        return i != index;
        })
        console.log(dataArr);
        displayTable(dataArr);
    }
}