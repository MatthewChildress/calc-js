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
const equalsBtn = document.getElementById("equals");
const delBtn = document.getElementById("delete");
const clearBtn = document.getElementById("clear");
let oldInput = document.getElementById("oldInput");
let newInput = document.getElementById("newInput");


numBtn.forEach(button => {
    button.addEventListener("click", () => {
      addNum(button.textContent)
    })
})



operateBtn.forEach(button => {
    button.addEventListener("click", () => {
        operate(button.textContent)
        
    })
})

clearBtn.addEventListener("click", () => {
    oldInput.textContent = ''
    newInput.textContent = ''
    console.log('clear')
})

delBtn.addEventListener("click", () => {
    newInput.textContent = newInput.textContent.slice(0,-1)

})

equalsBtn.addEventListener("click", () => {
    calculate(operant)
})

/* addNum needs to check if an operant has been clicked. if so, it needs to make oldInput = newInput with operant. newInput equals current number inputs */
// if newInput === operant oldInput equals 
function addNum(number) {
    if (number === '.' && newInput.textContent.includes('.')) return
    newInput.textContent += number
    console.log('addnum', typeof(number))
}

// operate needs to check if newInput is empty, if so. return nothing.
/* if oldInput has an operant and newInput has a number, needs to trigger calculate() and update oldInput newInput needs to be '' */
function operate(operant) {
    if (newInput.textContent !== '' && oldInput.textContent === '') {
    oldInput.textContent = newInput.textContent + ' ' + operant
    newInput.textContent = ''
    console.log(newInput.textContent)
    console.log('update op', oldInput.textContent)
    }
    if (oldInput.textContent !== '') {
        calculate()
    }

}

/* maybe a switch function that takes operant as case and runs the simple math based on it. needs to be floating numbers (maybe three like in python class?) */
function calculate() {
    let compute
    const old = parseFloat(oldInput.textContent)
    const now = parseFloat(newInput.textContent)
    switch(this.operant) {
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
    oldInput.textContent = compute
    operation = undefined
    newInput.textContent = ''
}
