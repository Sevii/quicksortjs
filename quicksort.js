//Javascript implementation of quicksort


function quicksort(arr){
	'use strict';
	if( arr === null){
		//do nothing
	}

	if(arr.length == 1){
		return arr;
	}

	if(arr.length == 2){
		var sorted = [];

		if(arr[0] > arr[1]){
			sorted.push(arr[1]);
			sorted.push(arr[0]);
			return sorted;
		}
		else{
			return arr;
		}
	}
	if(arr.length > 2){
		var pivot = getRandomInt(1,arr.length -1);
		var smaller = [];
		var larger = [];

		for(var i in arr){
			if(i != pivot){
				if(arr[i] <= arr[pivot]){
					smaller.push(arr[i]);
				}
				if(arr[i] > arr[pivot]){
					larger.push(arr[i]);
				}
			}
		}


		return (quicksort(smaller).concat(arr[pivot], quicksort(larger)));
	}
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}