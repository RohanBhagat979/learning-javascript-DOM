// learning the DOM 
'use strict';

//Common Ways to Select Elements
console.log(document.getElementById('heading3')); //this is meant to return single element thats why it is not in array form in console 
console.log(document.getElementsByTagName('p'));//this is meant to return multile elements thats why it is in array form in console
console.log(document.getElementsByClassName('paragraph'));//this is meant to return multile elements thats why it is in array form in console
console.log(document.querySelectorAll('p'));//this is meant to return multile elements thats why it is in array form in console
console.log(document.querySelector('#heading3'));//this is meant to return single element thats why it is not in array form in console


//Manipulation
document.querySelector('.changeThisPara').innerHTML = "i've changed the html using the javascript";
document.querySelector('.changeThisPara').style.color = "blue";
document.querySelector('.changeThisPara').style.border = "2px solid black";
document.querySelector('.changeThisPara').style.fontSize = "2.2rem";
document.querySelector('.changeThisPara').style.fontFamily = "Georgia";


//keep the HTML only for content, CSS for the style and JS for the behaviour.
//we've been adding the syles with JS this is not good practice a better way is to keep content, style and behaviour separate
console.log(document.querySelector('.btn').classList);
document.querySelector('.btn').classList.add('invisibility')
document.querySelector('.btn').classList.remove('invisibility')
//use toggel instead of add and remove
document.querySelector('.btn').classList.toggle('invisibility');
document.querySelector('.btn').classList.toggle('invisibility');
//using bigFont class on paragraph
document.querySelector(".lorem").classList.toggle("bigFont");


//there are two type of ways to access the element content by using .innerHTML and by using .textContent
console.log(document.querySelector(".lorem2").innerHTML); //it will also give the strong tags
console.log(document.querySelector(".lorem2").textContent); //it will not give the strong tags or any other html tags that are inside the paragraph
//example:
document.querySelector(".lorem2").innerHTML = "this is <em>going to be</em> great";
document.querySelector(".lorem2").textContent = "this is going to be great";


//getting attributes
console.log(document.querySelector("a"));
console.log(document.querySelector("a").attributes); //will gets you all the attributes
console.log(document.querySelector("a").getAttribute("href"));
document.querySelector("a").setAttribute("href", "https://news.ycombinator.com/")





