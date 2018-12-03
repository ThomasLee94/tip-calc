// Get a reference to bill input.
// Get a reference to the tip input.
// Get reference to total
const calculate = document.getElementById("calculate");
const bill = document.getElementById("amount");
const tipPercentage = document.getElementById("percent")
const tip = document.getElementById("tip")
const total = document.getElementById("total")


calculate.addEventListener("click", () => {
    const calculatedTip = bill.value * tipPercentage.value/100;
    console.log(calculatedTip);

    tip.innerHTML = calculatedTip;
    total.innerHTML = bill.value;
})

