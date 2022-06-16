function name(params) {
    return params;
}

let arrowName = param => param;

function isPositive(number) {
    return number >= 0;
}

let arrowIsPositive = (number) => number >= 0;

document.addEventListener('click',() => {
    console.log("Start");
});

console.log(name('Joe'));

console.log(arrowName('Dan'));

console.log(isPositive(2));

console.log(arrowIsPositive(2));