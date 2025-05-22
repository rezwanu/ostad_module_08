

function appendToDisplay(value){
    // console.log(value);
    let display = document.getElementById('display');
    display.value = display.value + value;

}

function clearDisplay(){
     let display = document.getElementById('display');
     display.value = "";
}

function deleteLast(){
    let display = document.getElementById('display');
    display.value = display.value.slice(0,-1);
}

function calculatorResult(){
    try{
        let result = eval(document.getElementById('display').value);
    display = document.getElementById('display').value = result;
    // console.log(result);
    }catch{
        console.error();
    }
}