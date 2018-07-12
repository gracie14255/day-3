// Write a function which takes one argument and returns "BIG!" if the number is bigger than 10, and "small" otherwise.
// Write a function which takes one argument and returns "negative" if the number is below zero, "positive" if the number is above zero, and "zero" if the number is zero.
// Write a function that takes two arguments and returns "same" if the arguments are the same, "different" if the arguments are different.
// Challenge: try solving some the first few Project Euler problems.

function sign(n){
	if (n<0){
		console.log('negative');
	}else if (n>0){
		console.log ('positive');
	}else if (n === 0){
		console.log ('zero');
	}
	
}

// sign(2);
// sign(-1);
// sign(0);

function comp (x){
	if(x>10){
		console.log ('BIG!');
	} else if (x<10){
		console.log ('small');
	}
}
// comp(11);
// comp(3);

function arg (x, y){
	if (x===y){
		console.log ('same');
	}else if (x!==y){
		console.log('different');
	}
}
// arg (1,2);
// arg (3,3); 

















