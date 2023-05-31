const buttonList=document.querySelectorAll(".grid-container button");
const outputcontainer =document.getElementById('input')
const clearButton =document.getElementById("clear");

function onButtonClick(event){
    let target=event.target;

    let currentValues =target.innerText;
    let enterdValue=outputcontainer.value;
    const operators =["+","-","*","/"];
    let lastKey=enterdValue[enterdValue.length-1];

    if(operators.includes(lastKey) && operators.includes(currentValues)){
        let newExp = enterdValue.slice(0,enterdValue.length-1) + currentValues;
        outputcontainer.value=newExp;
    }
    else if(currentValues=="="){
       const res=eval(enterdValue);
       outputcontainer.value=res ;

    }
    else{
        outputcontainer.value=outputcontainer.value + currentValues
    }

}

for(let i=0; i<buttonList.length;i++){
    buttonList[i].addEventListener("click",onButtonClick);
}

function onClear(){
    outputcontainer.value="";
}
clearButton.addEventListener("click",onClear);