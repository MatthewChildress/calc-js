/*
1. need something to change new output into old out put
old out put must include information from numbers and operators
2. need something for new input that shows numbers and operators
3. need delete function to slice[0, -1] information off
- delete needs to affect what is showing on new input
4. need an add number function. it must take information from 
button eventlisteners and convert to int and flt and show on new input
5. need an operator function. must take information from operator 
buttons eventlistners and convert onto new input
6. maybe a function between new and old inputs that takes information
from add number and operator and does math
7. clear button seems pretty straight forward and set.
8. reference rps and eas files for past solutions
9. one or two tutorials watched referenced classes, look into?
*/

const numBtn = document.querySelectorAll("[data-number]");
const operateBtn = document.querySelectorAll("[data-operant]");
const decimalBtn = document.querySelector("[data-decimal]");
const equalsBtn = document.querySelector("equals");
const delBtn = document.querySelector("delete");
const clearBtn = document.querySelector("clear");
let oldInput = document.getElementById("oldInput");
let newInput = document.getElementById("newInput");


numBtn.forEach(button => {
    button.addEventListener("click", () => {
      addNum(button.textContent)
    })
})

decimalBtn.addEventListener("click", () => {
    addDec(decimal.textContent)
})

operateBtn.forEach(button => {
    button.addEventListener("click", () => {
        operate(button.textContent)
        
    })
})

/* addNum needs to check if an operant has been clicked. if so, it needs to make oldInput = newInput with operant. newInput equals current number inputs */
function addNum(number) {
    newInput.textContent += number
}

/*addDec needs to check if newInput already has a decimal. if so, return with nothing. if not, add decimal to the newInput string */
function addDec(decimal) {
    if (newInput.textContent.includes('.')) return
    newInput.textContent += decimal
}

// operate needs to check if newInput is empty, if so. return nothing.
/* if oldInput has an operant and newInput has a number, needs to trigger calculate() and update oldInput newInput needs to be '' */
function operate(operant) {
    if (newInput !== '' && oldInput === '') {
        oldInput.textContent = newInput.textContent
        newInput.textContent = operant
    }
    if (oldInput !== '') {
        calculate(operant)
    }

}

/* maybe a switch function that takes operant as case and runs the simple math based on it. needs to be floating numbers (maybe three like in python class?) */
function calculate(operant) {
    let compute
    const old = parseFloat(oldInput.textContent)
    const now = parseFloat(newInput.textContent)
    switch(operant) {
        case '+':
            compute = old + now
            break
        case '-':
            compute = old - now
            break
        case '*':
            compute = old * now
            break
        case '/':
            compute = old / now
            break
        default:
            return
    }
    oldInput.textContet = compute
    operation = undefined
    newInput.textContent = ''


}

// erases all .textContent
function clear() {

}

// uses slice[0,-1] to keep removing last input from addNum
function delNum() {

}