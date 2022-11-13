let buttons = document.querySelectorAll(".color-change-button");
let color;
let buttonColors = [
  [255, 179, 186],
  [186, 225, 255],
  [255, 255, 186],
  [186, 255, 201],
];

function randomColor(j) {
  for (let i = 0; i < 3; i++) {
    buttonColors[j / 2][i] = Math.floor(Math.random() * 256);
  }
}

function setButtonColor(i) {
  color = `rgb(${buttonColors[i / 2][0]},${buttonColors[i / 2][1]},${
    buttonColors[i / 2][2]
  })`;
  buttons[i].style.backgroundColor = color;
  buttons[i + 1].style.backgroundColor = color;
}

for (let i = 0; i < buttons.length; i++) {
  if (buttons[i].innerText.length >= 10) {
    buttons[i].onclick = (event) => {
      //When a button is pressed write new color into array, change the color
      randomColor(i);
      setButtonColor(i);
    };
    setButtonColor(i);
  }
}

//Create Page of A, B, C and D
//Link to pages (onclick and case)
