(function($) {
	'use strict';
	
	function myFunction1(a, b) {
		a = parseFloat(a);
		b = parseFloat(b);
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
		b = parseFloat(b); 
		return a / b;                // Function returns the divsion of a and b
	}

	console.log("multiplication", myFunction1(1, 6));
	console.log("addition", myFunction2(1, 6));
	console.log("substraction", myFunction3(1, 6));
	console.log("division", myFunction4(1, 6));
	function calculate () {
		var $input1, $input2, $operator, $result;
		$input1 = $('#parameter1');
		$input2 = $('#parameter2');
		$operator = $('#operator');
		$result = $('#result');
		var input1Value = $input1.val(),
			input2Value = $input2.val(),
			operatorValue = $operator.val(); 
		console.log($input1, $input2, $operator);
		console.log(input1Value, input2Value, operatorValue);
		if(operatorValue === 'addition') {
			$result.text(myFunction2(input1Value,input2Value));
			
		} else if(operatorValue === 'substraction') {
			$result.text(myFunction3(input1Value,input2Value));
			
		} else if(operatorValue === 'division') {
			$result.text(myFunction4(input1Value,input2Value));
			
		} else if(operatorValue === 'multiplication') {
			$result.text(myFunction1(input1Value,input2Value));
			
		}	
		
	}

	$(document).ready(function() {
		var $form = $('#form');
		$form.on('submit', function(e) {
			e.preventDefault();
			calculate();
			return false;
		});
		$('#parameter1, #parameter2, #operator').on('change keyup', function(){
			calculate();
		});
		
	});
})(jQuery);