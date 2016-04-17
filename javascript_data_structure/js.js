var now = new Date();
// 1.	Write a JavaScript program to display the current day and time in the following format.
switch (now.getDay()) {
  case 0:alert("Today is: Sunday");break;
  case 1:alert("Today is: Monday");break;
  case 2:alert("Today is: Tuesday");break;
  case 3:alert("Today is: Wednesday");break;
  case 4:alert("Today is: Thursday");break;
  case 5:alert("Today is: Friday");break;
  case 6:alert("Today is: Saturday");break;
}
// 2.	Write a JavaScript program to get the current date.
console.log("current date: " + now.toString());
// 3.	Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.
for (var i = 2014; i < 2050 ; i++){
  var day = new Date(i, 0, 1);
  if (day.getDay() == 1 ){
    console.log(day);
  }
}
// 4.	Write a JavaScript program to calculate days left until next New Year.
  var newYear = new Date(now.getFullYear()+1, 0, 1);
  var diff = newYear - now;
  console.log("before the new year " + Math.round(diff / 86400000) + " days");

  // 5.	Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
  var a = [1,2,3,2];
  function is_array(mix) {
    return ( mix instanceof Array );
  }
  console.log(is_array(a));

  // 6.	Write a JavaScript function to clone an array
function cloneArray(arr){
  var cloneArr = [];
  for (var i = 0; i < arr.length ; i++){
    cloneArr[i] = arr[i];
  }
  return cloneArr;
}
console.log(cloneArray(a));

// 7.	Write a JavaScript function to find the most frequent item of an array
function frequentElem(arr){
  var itemCount = 0;
  var maxi = 0;

  for (var i = 0; i < arr.length; i++){
    itemCount = 0;
    for (var j = 0; j < arr.length; j++){
      if (i!=j){
        if (arr[i] == arr[j]){
          itemCount ++;
        }
      }
    }
    if (itemCount > maxi){
      maxi = i;
    }
  }
  return arr[maxi];
}
console.log(frequentElem(a));

// 8.	Write a JavaScript function that inverts the case of the letters of the given string and returns new string

function newUpperString(str){
  var result = str.toUpperCase();
  return result;
}
console.log(newUpperString("hello"));
// 9.	Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity)
var stringArray = ["String","stRingxx","strIng","sTring"];
for (var i = 0; i < stringArray.length; i++){
  for (var j = 0; j < stringArray.length; j++){
      if ( i != j && stringArray[j] != undefined && stringArray[i] != undefined){
        if (stringArray[i].toUpperCase() == stringArray[j].toUpperCase()){
          stringArray.splice(j, 1);
        }
    }
  }
}
console.log(stringArray);
// 10.	Write a JavaScript program to shuffle an array
var n = 0;
while ( 2 * n <= a.length){
  var c = a[2*n];
  n++;
  if ( a[2*n] != undefined){
    a[2 * (n-1)] = a[2*n];
    a[2*n] = c;
  }
}
console.log(a);

// 11.	Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array
function removeElem(mass){
  var rezMas = [];
  var k =0;
  for (var i = 0; i < mass.length; i++){
    if (mass[i] != null){
    if ( mass[i] != 0 ){
    if ( mass[i] != false){
    if ( mass[i] != ""){
    if (mass[i] != undefined ){
    if ( !(isNaN(mass[i])) || typeof mass[i] == "string"){
      rezMas[k] = mass[i];
      k++;
    }
    }
    }
    }
    }
    }
  }
  return rezMas;
}
var newMas = [1,0,3,"",false,undefined,NaN,"Привет"];
console.log(removeElem(newMas));
// 12.	Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method
function compare(a, b){
  var result = 0;
  if (a.title > b.title) {
    result = 1;
  } else if (a.title < b.title) {
    result = -1;
  }
  return result;
}

var people = [{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}];

people.sort(compare);

for(var i = 0; i < people.length; i++) {
  console.log(people[i]);
}
// 13.	Write a JavaScript function to merge two arrays and removes all duplicates elements
var mas1 = [1,2,3,4];
var mas2 = [2,4,"ghdbtn","hi"];
function mergeArray(elem1, elem2){
  for (var i = 0; i < elem2.length; i++){
    elem1.push(elem2[i]);
  }
  for (var i = 0; i < elem1.length; i++){
    for (var j = 0; j < elem1.length; j++){
        if ( i != j ){
          if (elem1[i] == elem1[j]){
            elem1.splice(j, 1);
          }
      }
    }
  }
  return elem1
}
console.log(mergeArray(mas1,mas2));
// 14.	Write a JavaScript function to remove a specific element from an array
function removeElement(element,arr){
	for (var i = 0; i < arr.length-1; i++){
		if (arr[i] == element){
			arr.splice(i, 1);
		}
	}
	return arr;
}
console.log(removeElement(15,[14,3,5,15,6,15,5]));
// 15.	Write a JavaScript function to get a random item from an array
function randomEl(arr){
  return arr[Math.round(Math.random( ) * (arr.length-1))];
}
console.log(randomEl([14,3,5,15,6,15,5]));
// 16.	Write a JavaScript function to move an array element from one position to another
// 17.	Write a JavaScript function to get difference between two dates in days
// 18.	Write a JavaScript function to get the maximum date from an array of dates
// Test Data :
// console.log(maxDate(['2015/02/01', '2015/02/02', '2015/01/03']));
// Output :
// "2015/02/02"
