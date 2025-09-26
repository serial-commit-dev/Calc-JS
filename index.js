let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

sumEl = document.getElementById("sum-el")

function add(){
    let added_val = num1 + num2
    console.log(added_val)
    sumEl.textContent = "Sum: " + added_val

}

function subtract(){
    let subtracted_val = num1 - num2
    console.log(subtracted_val)
    sumEl.textContent = "Sum: "+ subtracted_val
}

function divide(){
    let divided_val = num1 / num2
    console.log(divided_val)
    sumEl.textContent = "Sum: "+ divided_val
}

function multiply(){
    let multiplied_val = num1 * num2
    console.log(multiplied_val)
    sumEl.textContent = "Sum: "+ multiplied_val
}