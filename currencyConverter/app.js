const inp = document.querySelector("input");
const converter = document.querySelectorAll(".converter select");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to .select select");
const msg = document.querySelector(".output");
const btn = document.querySelector("button");

for (const select of converter) {
    // console.log(select);
    for (const countryCode in countryList) {
        const newOption = document.createElement("option");
        newOption.innerText = countryCode;
        newOption.value = countryCode;
        if (select.name == "from" && countryCode == "INR") {
            newOption.selected = "selected";

        }
        else if (select.name == "to" && countryCode == "USD") {
            newOption.selected = "selected";

        }
        select.append(newOption);
    }
    select.addEventListener("change", (eve) => {
        updateFlag(eve.target);
    })
}

const updateFlag = (ele) => {
    console.log(ele.value);
    let currCode = ele.value;
    let code = countryList[currCode];
    let newSrc = `https://flagsapi.com/${code}/flat/64.png`;
    let img = ele.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", async (event) => {
    event.preventDefault();
    let amountValue = inp.value || 1;
    console.log(fromCurr.value);

    const URL = `https://v6.exchangerate-api.com/v6/7a742bf3c84c81f052393e5f/latest/${fromCurr.value}`
    let response = await fetch(URL);
    let data = await response.json();
    console.log(toCurr.value);
    let exchangeRate = data.conversion_rates[toCurr.value];
    console.log(exchangeRate);
    const totalExchnage = (amountValue * exchangeRate);
    msg.innerText = `${amountValue} ${fromCurr.value}  = ${totalExchnage} ${toCurr.value}`;
});


