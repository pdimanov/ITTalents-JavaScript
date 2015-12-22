// Напишете JavaScript програма, която по даден array да показва най-
// често срещания символ.

var arr = [3, '2', '2', '2', 2, 2, 2, 3, '2', 3, '2', 2, 4, 9, 3]; 

function mostFrequent(arr){
	arr.forEach(function(element, index){
		arr[index] = +element;
	});
	arr.sort();

	var len = arr.length;
	var mostFrequentSymbol = arr[0];
	var mostFrequent = 1;
	var counter = 1;
	
	for(var i = 0; i < len - 1; i += 1){
		if(arr[i] === arr[i + 1]){
			counter++;
			if(counter > mostFrequent){
				mostFrequent = counter;
				mostFrequentSymbol = arr[i];
			}
		} else {
			counter = 1;
		}
	}

	console.log('The most frequent symbol is ' + mostFrequentSymbol + ' and it appeared ' + mostFrequent + ' times.');
}

mostFrequent(arr);