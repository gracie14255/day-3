//f(x) = 2x+1
// function f(x) {
// 	var answer= 2*x + 1;
// 	return answer;
// }
// var output= f(3);
// console.log("The answer is "+ output + "! I'm really sure the answer is " +output); 

// g() = 5
// h(x) = 3x - 2
// Write a function that takes two arguments and returns double their sum.
// a(x, y, z) = 5x + 2y - 3z + 7
// b(x, y, z) = h(x) + h(y) + a(x, y, z)
var globalVariable;

function g(){
	var answer=5;
	return answer;
}

function h(x) {
	var answer= 3*x -2;
	return answer;
}

function doubleSum (x,y){
	var answer =(x+y) *2;
	return answer;
}

function a(x,y,z){
	var answer= 5*x + 2*y -3*z + 7;
	return answer;
}

function b(x,y,z){
	var answer= h(x)+h(y)+a(x,y,z);
	return answer;
}


function pythag(a,b){
	function square(x){
		var answer= x*x;
		return answer;
	}
	var aSquared = square(a);
	var bSquared= square(b);
	return Math.sqrt (aSquared+bSquared);
	return answer;
}

function g(a){
	var answer= a*a*a;
	return answer;
}
var output= g(5);
// console.log (output);

function triple(a){
	var answer= a+a+a;
	return answer;
}
console.log (triple("你是谁"));





















