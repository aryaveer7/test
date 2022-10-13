const main = document.querySelector("main");
let addUserBtn = document.getElementById("add-user");
let doubleBtn = document.getElementById("double");
let showmillionaireBtn = document.getElementById("show-millionaires");
let sortBtn = document.getElementById("sort");
let calculateWealthBtn = document.getElementById("calucate-wealth");


let data = [];

//fatch rendom user and add money

 async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api/');
    const adata = await res.json();
    const user = adata.results[0]; 
    console.log(user);

    const newUser ={
        name: `${user.name.first} ${user.name.last}`,
        money:Math.floor(Math.random() * 1000000),
    };
//    addData(newUser); 
data.push(newUser);
updateDom();
}


//double money
function doubleMoney(){
    data = data.map((user) =>{
        return {...user, money: user.money*2};
    })
    updateDom();
}
//show millionaires used filter Method

function showmillionaires(){
    data = data.filter((user) => {
      return  user.money >1000000
    })
    updateDom();
}
//sort by richest

function sortByRichest(){
    data.sort((a,b)=>b.money - a.money);
    updateDom();
}

//caluclate entair wealth

function calculateWealth(){
    const wealth = data.reduce((acc,user) =>{
        return acc+user.money;

    },0)
    const wealthEl = document.createElement("div");
wealthEl.innerHTML=`<h3>Total Wealth: <strong> ${formatMoney(wealth)} </h3>`;
main.appendChild(wealthEl);

}




getRandomUser();
getRandomUser();
getRandomUser();




function updateDom(providedData = data){
    main.innerHTML=`<h2><strong>Person</strong> wealth</h2>`;
    providedData.forEach((item) =>{
        const element = document.createElement("div");
        element.classList.add("person");
        element.innerHTML=`<strong>${item.name}</strong> ${formatMoney(item.money)}`
        main.appendChild(element);
    })
}

// format number as money
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
}


//Eventlistener to button

addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click",doubleMoney);
showmillionaireBtn.addEventListener("click",showmillionaires);
sortBtn.addEventListener("click",sortByRichest);
calculateWealthBtn.addEventListener("click",calculateWealth);