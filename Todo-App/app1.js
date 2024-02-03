let selectBtn=document.querySelector("#btn");
let ul=document.querySelector("#add");
let input=document.getElementById("inp");

selectBtn.addEventListener("click",function(){
    let item=document.createElement('li');
    item.innerText=input.value;
    let del=document.createElement("button");
    del.innerText="delete";
    del.classList.add("del");
    item.appendChild(del);
    ul.appendChild(item);
    input.value="";
    
});


ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){

        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("element deleted");
    }
});
//the below event will nt wrk on newly added elements, this is called event delegation
//we can call avaid it by using event bubling, in this case we will addevent listener on parent element

// let delbtns=document.querySelectorAll(".del");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     });
// }
    