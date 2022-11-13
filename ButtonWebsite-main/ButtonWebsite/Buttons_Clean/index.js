let buttons = document.querySelectorAll(".color-change-button");
let topBar = document.querySelector(".top-bar");
let contentOfLetterPage = document.querySelectorAll(".content-Of-Page");
let discoButton = document.querySelector(".disco-Button");
let discoToggle = false;
let buttonColors = [
  [255, 179, 186],
  [186, 225, 255],
  [255, 255, 186],
  [186, 255, 201],
];

function randomColor(j) {
  if (j < 4) {
    for (let i = 0; i < 3; i++) {
      buttonColors[j / 2][i] = Math.floor(Math.random() * 256);
    }
  } else {
  }
  return Math.floor(Math.random() * 256);
}

function setButtonColor(i) {
  let color = `rgb(${buttonColors[i / 2][0]},${buttonColors[i / 2][1]},${
    buttonColors[i / 2][2]
  })`;
  buttons[i].style.backgroundColor = color;
  buttons[i + 1].style.backgroundColor = color;
  localStorage.setItem("Colors", JSON.stringify(buttonColors));
}

//Change button color to a random value
for (let i = 0; i < buttons.length; i++) {
  if (buttons[i].innerText.length >= 10) {
    buttons[i].onclick = () => {
      randomColor(i);
      setButtonColor(i);
    };
    setButtonColor(i);
  }
}

//Onclick link to other pages
for (let i = 0; i < buttons.length; i++) {
  if (buttons[i].innerText.length == 1) {
    buttons[i].onclick = (event) => {
      switch (event.target.innerText) {
        case "a":
          window.location = "./MeaningOfA.html";
          break;
        case "b":
          window.location = "./MeaningOfB.html";
          break;
        case "c":
          window.location = "./MeaningOfC.html";
          break;
        case "d":
          window.location = "./MeaningOfD.html";
          break;
        default:
          console.log("I have no idea what button you pressed, congrats");
      }
    };
  }
}

topBar.onclick = () => {
  window.location = "./";
};

function changeBackgroundColor(index) {
  const storedColors = JSON.parse(localStorage.getItem("Colors"));
  for (let i = 0; i < contentOfLetterPage.length; i++) {
    contentOfLetterPage[
      i
    ].style.backgroundColor = `rgb(${storedColors[index]})`;
  }
}

if (document.URL.includes("MeaningOfA")) {
  changeBackgroundColor(0);
}
if (document.URL.includes("MeaningOfB")) {
  changeBackgroundColor(1);
}
if (document.URL.includes("MeaningOfC")) {
  changeBackgroundColor(2);
}
if (document.URL.includes("MeaningOfD")) {
  changeBackgroundColor(3);
  discoButton.onclick = () => {
    if (!discoToggle) {
      discoModeActive();
      discoLoop = setInterval(discoModeActive, 30);
      discoToggle = true;
    } else if (discoToggle) {
      clearInterval(discoLoop);
      discoToggle = false;
    }
  };
}

function discoModeActive() {
  for (let i = 0; i < contentOfLetterPage.length; i++) {
    contentOfLetterPage[
      i
    ].style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
  }
}
