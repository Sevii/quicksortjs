//Tests for quicksort.js

describe("Quicksort", function(){

	function arrayEquals(arr, bar){
		var equals = true;
		if(arr.length == bar.length){
			for(var i = 0; i < arr.length; i++){
				if(arr[i] != bar[i]){
					equals = false;
				}
			}
		}
		return equals;
	}


	

	

	// it("Should return an null when passed null", function(){
	// 	expect(quicksort(null) === null).toBe(true);
	// });

	it("Returns the same list when passed a list of length 1", function(){
		var arr = quicksort([1]);
		var bar = quicksort([3]);
		expect(arrayEquals(bar, [ 3] )).toBe(true);
		expect(arrayEquals(arr, [1])).toBe(true);
	});


	it("Should return a sorted list when passed a list of length 2", function(){
		var shortunsorted = [4,3];
		var shortsorted = [3,4];

		var sortproduct = quicksort(shortunsorted);
		expect(arrayEquals(shortsorted, sortproduct)).toBe(true);
	});


	it("Should return a sorted list", function(){

		var unsorted = [3,9,10,234, 1, 15, 42];
		var sorted = [1,3,9,10, 15,42, 234];

		var sortproduct = quicksort(unsorted);
		
		expect(arrayEquals(sortproduct,sorted)).toBe(true);
		

	});	
	it("Should return a sorted list even with duplicates", function(){
		var unsorted2 = [4,3,21,43,1,2,4];
		var sorted2 = [1,2,3,4,4,21,43];

		var sortproduct2 = quicksort(unsorted2);
		expect(arrayEquals(sortproduct2,sorted2)).toBe(true);
	});

});