function triangleArea(side1,side2,side3){
  var p = (side1+side2+side3)/2;
  return Math.sqrt(p*(p-side1)*(p-side3)*(p-side2));
}

function signNumber(number){
  if (number > 0){
    alert("Число больше 0");
  } else if (number < 0) {
    alert("Число меньше 0");
  } else {
    alert("Число 0");
  }
}

var a=2;
var b=3;
var c=4;
console.log(a,b);

alert("Площадь треугольника = "+triangleArea(a,b,c));

var arr = [4,6,8];
var i;

console.log("for");
for (i = arr.length-1; i >= 0; i--) {
  console.log(arr[i] );
}

console.log("while");
i=arr.length-1;
while (i >= 0) {
  console.log( arr[i] );
  i--;
}

console.log("do while");
i=arr.length-1;
do {
  console.log( arr[i] );
  i--;
} while (i >= 0)

var number=2;

signNumber(number);
console.log("difference between ++i and i++");
console.log("++i increments the value first and then return it");
console.log("i++ return the value first and then increments it");
console.log(number++);
console.log(++number);
