function convert(){
    let number1 = document.getElementById('num1');
    let number2 = document.getElementById('num2');
    let result = document.getElementById('result');
    let fl = number1.value / number2.value ; 
    result.innerText = fl;
}