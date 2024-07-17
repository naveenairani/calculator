//display number id
let disnum = document.getElementById("disnum");

let currentNum = '';
let previousNum = '';
let operator = '';

function updatedisplay(value){
    disnum.innerText = value;
}
//all button div ids
document.querySelector("#ac").addEventListener("click",()=> {
    currentNum = '';
    previousNum = '';
    operator = '';
    updatedisplay('0')
})
document.querySelector("#plusminus").addEventListener('click', () =>{
    if(currentNum !== ""){
        currentNum = currentNum.startsWith('-') ? currentNum.slice(1) : '-' + currentNum;
        updatedisplay(currentNum)
    }
})
document.querySelector("#clear").addEventListener('click', ()=>{
    currentNum = '';
    previousNum = '';
    operator = '';
    updatedisplay('')
})

function handleNum(value){
    currentNum += value;
    updatedisplay(currentNum);
}


document.querySelector('#seven').addEventListener('click', ()=>handleNum('7'));
document.querySelector('#eight').addEventListener('click', ()=>handleNum('8'));
document.querySelector('#nine').addEventListener('click', ()=>handleNum('9'));
document.querySelector("#four").addEventListener('click', ()=>handleNum('4'));
document.querySelector("#five").addEventListener('click', ()=>handleNum('5'));
document.querySelector("#six").addEventListener('click', ()=>handleNum('6'));
document.querySelector('#one').addEventListener('click', ()=>handleNum('1'));
document.querySelector("#two").addEventListener('click', ()=>handleNum('2'));
document.querySelector("#three").addEventListener('click', ()=>handleNum('3'));
document.querySelector("#zero").addEventListener('click', ()=>handleNum('0'));
document.querySelector("#dot").addEventListener('click', ()=>{
    if(!currentNum.includes('.')){
        currentNum += '.'
        updatedisplay(currentNum);
    }
});


document.querySelector('#percentage').addEventListener('click', ()=>{
    if(currentNum !== ""){
        currentNum = (parseFloat(currentNum)/100).toString();
        updatedisplay(currentNum);
    }
})

function handleOperator(op){
    if(currentNum === '' && previousNum === ''){
        operator = op
        return;
    }
    if(previousNum === ""){
        previousNum = currentNum;
        currentNum = '';
    }
    else{
        calculate();
    }
    operator = op;
}

document.querySelector('#divide').addEventListener('click', ()=> handleOperator('/'));
document.querySelector("#multiply").addEventListener('click', ()=> handleOperator('*'));
document.querySelector("#minus").addEventListener('click', ()=> handleOperator('-'));
document.querySelector("#add").addEventListener('click', ()=> handleOperator('+'));
//var buttons = [ac, plusminus, percentage, divide, seven, eight, nine, multiply, four, five, six, minus, one, two, three, add, clear, zero, dot, equal]

document.querySelector('#equal').addEventListener('click', ()=>{
    if(currentNum!==''&&previousNum!==''&&operator!==''){
        calculate()
    }
})
function calculate(){
    let result;
    let prev = parseFloat(previousNum);
    let curr = parseFloat(currentNum);

    if(prev === isNaN || curr === isNaN) return;

    switch(operator){
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            if(curr === 0){
                return
            }
            else{
                result = prev / curr;
            }
            break;
    }
    currentNum = result.toString()
    previousNum = ''
    updatedisplay(currentNum)
}