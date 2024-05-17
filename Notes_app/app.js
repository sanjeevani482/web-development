let btn=document.querySelector(".button1");
let note=document.querySelector(".notes");

function updateStorage(){
    localStorage.setItem("notes", note.innerHTML)
}


(function showNotes(){
    note.innerHTML=localStorage.getItem("notes");
})();

btn.addEventListener("click", () => {
    const div=document.createElement("div");
    const img=document.createElement("img");
    img.src="./images/delete.png"
    img.className="task--img"
    div.append(img);
    div.className="task";
    div.contentEditable=true;
    note.append(div);
});

note.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
   else if(e.target.tagName == "DIV")
    {
        const task=document.querySelectorAll(".task");
        task.forEach( nt => {
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
   
})