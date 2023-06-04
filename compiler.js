"use strict";
function hello(name) {
    console.log("Hello " + name);
}
const firstName = "Bob";
hello(firstName);
hello(firstName + "Marley");
function concat(a, b) {
    return a + " " + b;
}
const wcs = concat("Wild", concat("Code", "School"));
console.log(wcs);
