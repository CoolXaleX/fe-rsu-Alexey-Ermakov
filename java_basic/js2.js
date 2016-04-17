var res;
res = prompt("Ваше имя", "");
alert("Ваше имя " + res);


function factorial(n) {
    "use strict";
    return (n !== 1)
        ? n * factorial(n - 1)
        : 1;
}

alert("factorial(4)= " + factorial(4));
