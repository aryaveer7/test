let tbody = document.querySelector("tbody");
let sort =document.getElementById("sort");
let paginationDOM =  document.querySelector("#pagination");
let crypto_per_page = 10;
let current_page = 1;
let pages = Math.ceil(crypto_data.length / crypto_per_page);

function renderDOM(data){
    tbody.innerHTML = null;
data.map(function(ele){
let tr =document.createElement("tr");
let name = document.createElement("td");
name.textContent = ele.name;
let price = document.createElement("td");
price.textContent = ele.price;
let market_cap = document.createElement("td");
market_cap.textContent = ele.market_cap;
let high24 = document.createElement("td");
high24.textContent = ele.high24;
let low24 = document.createElement("td");
low24.textContent = ele.low24;

tr.append(name,price,market_cap,high24,low24)

tbody.append(tr);
})
}


//add the page btn
function renderPagination(pages){
for(let i =1;i<=pages;i++){
let btn = document.createElement("button");
btn.innerText = i;
btn.addEventListener("click",function(){
    current_page = i;
    activePage(current_page);
    paginatedTable(crypto_data,current_page,crypto_per_page)
})
paginationDOM.append(btn);
};
};

renderPagination(pages);
paginatedTable(crypto_data,current_page,crypto_per_page);//for defult page


//data == cryptodata
//page == current page state
//perPage == crypto_per_page
function paginatedTable(data,page,perPage){

    let start = perPage*(page-1);
    let end = perPage*page;
let splited = data.slice(start,end);
console.log(page);
renderDOM(splited);
}


//sorting the data
sort.addEventListener("change",function(){
    current_page = 1;
    if(sort.value == ""){
        paginatedTable(crypto_data,current_page,crypto_per_page);
    }else{
    
       let sortedData = crypto_data.map(function(ele){
        return ele;
       });
       if(sort.value == "Low-High"){
        sortedData.sort(function(a,b){
            return a.high24 - b.high24;
        })
        
       }else if(sort.value == "High-Low"){
        sortedData.sort(function(a,b){
            return b.high24 - a.high24;
        })
        
       }
       activePage(current_page);
       paginatedTable(sortedData,current_page,crypto_per_page);
    }
})

function activePage(current_page){
let buttons = document.querySelectorAll("#pagination>button");
buttons.forEach(function(el){
if(el.textContent == current_page){
      el.style.color = "green";
      el.style.backgroundColor = "red";
}else{
    el.style.color = "black";
    el.style.backgroundColor = "white";
}
});
}

