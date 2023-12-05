let num1=document.getElementById('num1')
let num2=document.getElementById('num2')
let result=document.getElementById('result')

let sum, sub, mul, div=0
function add(){
    // console.log(num1.value)
    // console.log(num2.value)
    
    sum=Number(num1.value) + Number(num2.value)
    // console.log("Sum: ",sum)
    result.textContent=`Sum: ${sum}`
}

function subtract(){
    sub=Number(num1.value) - Number(num2.value)
    // console.log("Sub ",sub)
    result.textContent=`Subtraction: ${sub}`
}

function multiply(){
    mul=Number(num1.value) * Number(num2.value)
    // console.log("Multiply: ",mul)
    result.textContent=`Multiplication: ${mul}`
}

function divide(){
    if(num2.value === '0'){
        result.textContent=`Can not Divide by zero`
    }else{
        div=Number(num1.value) / Number(num2.value)
        // console.log("Divide: ",div)
        result.textContent=`Dividation: ${div}`
    }
    
}