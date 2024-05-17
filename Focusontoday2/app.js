const inp=document.querySelectorAll(".goal-inp");
const check_icon=document.querySelectorAll(".check-icon");
const progress_value= document.querySelector(".progress-value");
const check_box =document.querySelector(".check-box");
const container=document.getElementById("#container");

function saveDate(p) {
    localStorage.setItem("data", p)
}


for (let index = 0; index < inp.length; index++) {
    inp[index].addEventListener("keyup", () => {
        saveDate(inp[index].value);
    })
    
}
function showList(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showList();