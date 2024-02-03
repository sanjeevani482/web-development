let todo = [];
let req = prompt("Please eneter your request");
// console.log("rq");
while (true) {
    if (req == 'quit') {
        console.log("quitting the app");
        break;
    }
    if (req == "list") {
        if (todo.length == 0) {
            consol.log("no task is added");
        }
        else {
            console.log("*****************");
            for (let i = 0; i < todo.length; i++) {
                console.log(i,todo[i]);
            }
            console.log("*****************");
        }


    }
    else if (req == "add") {
        let task = prompt("enter the task which you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        let idx=prompt("please enter the task value");
        todo.splice(idx,1);
        console.log("deleted");
    }
    else{
        console.log("wrong request");
    }
    req = prompt("Please eneter your request");

}