let LSData = JSON.parse(localStorage.getItem("admission")) || [];

renderDom(LSData,["Accept","Reject"],onClick);

function onClick(el,index){
   

    let filtered = LSData.filter(function(ele,ind){

        if(ind == index){
         let LSData2 = JSON.parse(localStorage.getItem("admission-"+el.toLowerCase())) || [];
         LSData2.push(ele);
        localStorage.setItem("admission-"+el.toLowerCase(),JSON.stringify(LSData2));  
         
        }
        return ind != index;

        })
      LSData = filtered;
      localStorage.setItem("admission",JSON.stringify(LSData));
      renderDom(LSData,["Accept","Reject"],onClick);
}

