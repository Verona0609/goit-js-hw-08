
const ulElem = document.querySelector("#categories");


const itemEl = document.querySelectorAll(".item");

console.log(`Number of categories : ${itemEl.length}`);

    const items = document.querySelectorAll('#categories .item');

items.forEach(item => {

const category = item.querySelector("h2").textContent;
const elements = item.querySelectorAll("ul li").length;


console.log(`Category: ${category}`)
console.log(`Elements: ${elements}`)

});






