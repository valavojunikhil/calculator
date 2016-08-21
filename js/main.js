
function myFunction1(a, b) {
    return a * b;                // Function returns the product of a and b
}

function myFunction2(a, b) {
	a = parseFloat(a);
	b = parseFloat(b);
    return a + b;                // Function returns the addition of a and b
}

function myFunction3(a, b) {
	a = parseFloat(a);
	b = parseFloat(b); 
    return a - b;                // Function returns the substraction of a and b
}

function myFunction4(a, b){
	a = parseFloat(a);
	b = parseFloat(b) 
    return a / b;                // Function returns the divsion of a and b
}

console.log("multiplication", myFunction1(1, 6));
console.log("addition", myFunction2(1, 6));
console.log("substraction", myFunction3(1, 6));
console.log("division", myFunction4(1, 6));
function calculator () {
	var input1, input2, operator, result;
	input1 = document.getElementById('parameter1');
	input2 = document.getElementById('parameter2');
	operator = document.getElementById('operator');
	result = document.getElementById('result');
	console.log(input1, input2, operator);
	console.log(input1.value, input2.value, operator.value);
	if(operator.value === 'addition') {
		console.log(input1.value + input2.value)
		console.log(myFunction2(input1.value,input2.value));
		result.innerHTML = myFunction2(input1.value,input2.value);
		
	} else if(operator.value === 'substraction') {
		console.log(input1.value - input2.value)
		console.log(myFunction3(input1.value,input2.value));
		result.innerHTML = myFunction3(input1.value,input2.value);
		
	} else if(operator.value === 'division') {
		console.log(input1.value / input2.value)
		console.log(myFunction4(input1.value,input2.value));
		result.innerHTML = myFunction4(input1.value,input2.value);
		
	}	else if(operator.value === 'multiplication') {
		console.log(input1.value * input2.value)
		console.log(myFunction1(input1.value,input2.value));
		result.innerHTML = myFunction1(input1.value,input2.value);
		
	}	
	
}