document.addEventListener("DOMContentLoaded", () =>{
  const input = document.querySelector("input");
  const createBtn = document.querySelector(`button[data-create]`);
  const destroyBtn = document.querySelector(`button[data-destroy]`);
  const boxesContainer = document.querySelector(`#boxes`);
  

  createBtn.addEventListener("click", () =>{
    const numBoxes = parseInt(input.value);

if(numBoxes >= 1 && numBoxes <= 100){
  createBoxes(numBoxes);
}else{
  alert("Please enter a number between 1 and 100,")
}
input.value = "";
});
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount){
  destroyBoxes();
  const boxes=[];
  let initialSize = 30;

  for(let i = 0; i < amount; i++){
    const box = document.createElement(`div`);
    box.style.width = box.style.height = `${initialSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes(){
  boxesContainer.innerHTML ="";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    
}
});








