//PROBLEM 1
// Print the first p tag to the console using the ID, class, and tag selectors.

//Using ID
var grabTagID = document.getElementById("first");
console.log("*****USING ID*****");
console.log(grabTagID.innerText);

//Using class
var grabTagClass = document.getElementsByClassName("special");
console.log("*****USING CLASS*****");
console.log(grabTagClass[0].innerText);

//Using Tag Selector
var grabTagSelector = document.getElementsByTagName("p");
console.log("*****USING TAG*****");
console.log(grabTagSelector[0].innerText);

//PROBLEM 2
// Print the special class using both the query selector and query all selector.

//Using query selector
var grabClassSelector = document.querySelector(".special");
console.log("*****USING QUERY SELECTOR*****");
console.log(grabClassSelector.innerText);

//Using query selector all
var grabClassSelectorAll = document.querySelectorAll(".special");
console.log("*****USING QUERY SELECTOR ALL*****");
console.log(grabClassSelectorAll[0].innerText);

//PROBLEM 3
// Change the color of the h1 statement to blue.
var grabHeader = document.getElementsByTagName("h1")[0];
grabHeader.style.color = "blue";

//PROBLEM 4
// Change the color of the last p tag to yellow.
var grabLastTag = document.getElementById("last");
grabLastTag.style.color = "yellow";