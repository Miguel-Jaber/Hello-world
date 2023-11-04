function subtract() {
	let firstNumber = Number(document.getElementById("number1").value);
	let secondNumber = Number(document.getElementById("number2").value);
	let result = firstNumber - secondNumber;
	document.getElementById("result").value = result;
}
