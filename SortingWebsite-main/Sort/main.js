let itemNumberInputSlider = document.querySelector(
  ".slider-input-for-number-of-items"
);
let itemNumberInput = document.querySelector(
  ".number-input-for-number-of-items"
);
let Bubblesort = document.querySelector(".Bubblesort");
let Quicksort = document.querySelector(".Quicksort");
let Mergesort = document.querySelector(".Mergesort");
let createElements = document.querySelector(".create-elements");
let itemContainer = document.querySelector(".item-container");

itemNumberInput.onchange = (event) => {
  itemNumberInputSlider.value = event.target.value;
};
itemNumberInputSlider.onchange = (event) => {
  itemNumberInput.value = event.target.value;
};

createElements.onclick = () => {
  let numberOfItems = itemNumberInput.value;
  itemContainer.innerHTML = "";
  for (let i = 0; i <= numberOfItems; i++) {
    let randomHeight = Math.floor(
      Math.random() * (0.9 * window.innerHeight) + 1
    );
    let variableWidth = window.innerWidth / numberOfItems;
    itemContainer.innerHTML += `<div class="items-to-be-sorted" style="height: ${randomHeight}px; width: ${variableWidth}px;background-color: red;"></div>`;
  }
};

Bubblesort.onclick = () => {
  let itemsToBeSorted = document.querySelectorAll(".items-to-be-sorted");
  console.log(itemsToBeSorted);
};
