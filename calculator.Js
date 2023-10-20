let flag = false;

function setResult(val) {
    let op=document.querySelector("#op");
    let targil=document.querySelector("#targil");
    if( op.innerText != "" && targil.innerText.charAt(targil.innerText.length -1)!= op.innerText)
      targil.innerText = targil.innerText + op.innerText;
    let res = document.querySelector("#res");
    if (val === '.'){
        if(!flag){
            res.innerText=res.innerText+val;
            flag=true;
        }
    }
    else{
        res.innerText=parseFloat(res.innerText+val);
    }
}
    
function setOp(val){
    let op = document.querySelector("#op");
    if(op.innerText == ""){
        document.querySelector("#targil").innerText = document.querySelector("#res").innerText;
        document.querySelector("#res").innerText="0";
    }
    op.innerText = val;
  
}

function setTotal(){
    let targil=document.querySelector("#targil");
    let op=document.querySelector("#op");
    targil.innerText=targil.innerText + document.querySelector("#res").innerText;
    let numbers = targil.innerText.split(op.innerText);
    let result = calculate(parseFloat(numbers[0]), parseFloat(numbers[1]),op.innerText);
    targil.innerText = targil.innerText + "="+ result;
    document.querySelector("#res").innerText=result;
    op.innerText="";

}

function calculate(a,b,op) {
    let result=0;
    switch(op){
        case "+":
            result= a+b;
            break;
        case "-":
            result= a-b;
            break;
        case "*":
            result= a*b;
            break;
        case "/":
            result= a/b;
            break;
        default:
            break;
    }
    return result;

}






