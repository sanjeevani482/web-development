const allcheckBoxes = document.querySelectorAll(".check-box");
const allinputs = document.querySelectorAll(".goal-container .goal-inp");
const error_label = document.querySelector(".error-label")
const progress_bar = document.querySelector(".progress-bar");
const progress_value = document.querySelector(".progress-value");
const progress_label = document.querySelector("#progress-label");


const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}
console.log(progress_label)
function progressBar() {
    // console.log(Object.values(allGoals));
    // console.log(allGoals);
    let progress_barr = Object.values(allGoals).filter((goal) => goal.completed)
    // console.log(progress_barr.length);
  
   
        // console.log({$((progress_barr.length)/allinputs.length)*100}%);
        // console.log(progress_barr.length);
        console.log(`${progress_barr.length} /${allinputs.length}*100`);
        
        
        
        progress_value.style.width = `${(progress_barr.length / allinputs.length) * 100}%`;
        progress_value.innerText = `${progress_barr.length}/${allinputs.length} Completed`

       
    
    if (progress_barr.length == 1) {
        // console.log(progress_label)
        
        progress_label.innerText = "Well begun is half done!"
    }
    if (progress_barr.length == 3) {
        progress_label.innerText = "Whoa! You just completed all the goals, time for chill :D"
    }
}
progressBar()


allcheckBoxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
        let allGoalsAdded = [...allinputs].every((val) => {
            return val.value
        })

        if (allGoalsAdded) {
            checkbox.parentElement.classList.toggle('completed')
            const inpId = checkbox.nextElementSibling.id
            allGoals[inpId].completed = !allGoals[inpId].completed
            localStorage.setItem('allGoals', JSON.stringify(allGoals))
            progressBar()
        } else {
            progress_bar.classList.add("show-error")


        }
    })

})

allinputs.forEach((input) => {
    //    console.log(allGoals[input.id]);
    if(allGoals[input.id]){
        input.value = allGoals[input.id].name
    }
   
    
    if (allGoals[input.id] && allGoals[input.id].completed) {
        input.parentElement.classList.add('completed')
    }

    input.addEventListener('focus', () => {
        progress_bar.classList.remove("show-error")
    })
    input.addEventListener('input', (e) => {
        //allGoals.id.name=e.target.value;
        if (allGoals[input.id] && allGoals[input.id].completed) {
            console.log(allGoals[input.id].name);

            e.target.value = allGoals[input.id].name
            return
        }

        allGoals[input.id] = {
            name: e.target.value,
            completed: false
        }
        localStorage.setItem('allGoals', JSON.stringify(allGoals))

      

    })
})




