function drawTriangle(height){
	// var height = prompt('Введите высоту: ');
	var str = '';
		for (var i = 0; i < height - 1; i++){
			str += ' '.repeat(height - 1 - i) + '/' + ' '.repeat(2 * i) + '\\\n';
		}
		str += ' '.repeat(height - 1 - i) + '/' + '_'.repeat(2 * i) + '\\\n';
		console.log(str);
}


function drawRomb(height){
	// var height = prompt('Введите высоту: ');
	var str = '';
		for (var i = 0; i < height; i++){
			str += ' '.repeat(height - 1 - i) + '/' + ' '.repeat(2 * i) + '\\\n';
		}
		for (var j = height; j > 0; j--){
			str += ' '.repeat(height - j) + '\\' + ' '.repeat(2 * (j-1)) + '/\n';
		}
		console.log(str);
}


function multiply(num1,num2){
	var multiply;
	multiply = 0;
	for(i = 0; i < Math.abs(num2); i++){
		multiply += num1;
  	}
  	if (num2 < 0){
  		multiply *= -1;
  	}
  console.log(multiply);
}