var argb = localStorage.getItem("argb");
var ra = localStorage.getItem("ra");
var ga = localStorage.getItem("ga");
var ba = localStorage.getItem("ba");
var brgb = localStorage.getItem("brgb");
var rb = localStorage.getItem("rb");
var gb = localStorage.getItem("gb");
var bb = localStorage.getItem("bb");
var crgb = localStorage.getItem("crgb");
var rc = localStorage.getItem("rc");
var gc = localStorage.getItem("gc");
var bc = localStorage.getItem("bc");
var drgb = localStorage.getItem("drgb");
var rd = localStorage.getItem("rd");
var gd = localStorage.getItem("gd");
var bd = localStorage.getItem("bd");
console.log(argb);
console.log(ra, ga, ba);

function discomode() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  var rgb = "rgb(" + red + "," + green + "," + blue + ")";

  document.querySelector(".rgbd").style.backgroundColor = rgb;
  document.querySelector(".rgbd1").style.backgroundColor = rgb;
  console.log(rgb);
}

if (document.URL.includes("a")) {
  document.querySelector(".rgba").style.backgroundColor = argb;
  document.querySelector(".rgba1").style.backgroundColor = argb;
  if (ra * 0.299 + ga * 0.587 + ba * 0.114 > 186) {
    const nodeList = document.querySelectorAll(".text-color");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.color = "black";
    }
  } else {
    const nodeList = document.querySelectorAll(".text-color");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.color = "white";
    }
  }
}

if (document.URL.includes("b")) {
  document.querySelector(".rgbb").style.backgroundColor = brgb;
  document.querySelector(".rgbb1").style.backgroundColor = brgb;
  if (rb * 0.299 + gb * 0.587 + bb * 0.114 > 186) {
    const nodeList = document.querySelectorAll(".text-color");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.color = "black";
    }
  } else {
    const nodeList = document.querySelectorAll(".text-color");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.color = "white";
    }
  }
}

if (document.URL.includes("c")) {
  document.querySelector(".rgbc").style.backgroundColor = crgb;
  document.querySelector(".rgbc1").style.backgroundColor = crgb;
  if (rc * 0.299 + gc * 0.587 + bc * 0.114 > 186) {
    const nodeList = document.querySelectorAll(".text-color");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.color = "black";
    }
  } else {
    const nodeList = document.querySelectorAll(".text-color");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.color = "white";
    }
  }
}

if (document.URL.includes("d")) {
  let disco = document.querySelector(".Disco");
  let disco_on_off = false;

  disco.onclick = function () {
    if (!disco_on_off) {
      console.log("Disco is on");
      disco_on_off = true;
    } else {
      console.log("Disco is off");
      disco_on_off = false;
    }
    if (disco_on_off) {
      discoloop = setInterval(discomode, 20);
    }
    if (!disco_on_off) {
      clearInterval(discoloop);
    }
  };
  document.querySelector(".rgbd").style.backgroundColor = drgb;
  document.querySelector(".rgbd1").style.backgroundColor = drgb;
  if (rd * 0.299 + gd * 0.587 + bd * 0.114 > 186) {
    const nodeList = document.querySelectorAll(".text-color");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.color = "black";
    }
  } else {
    const nodeList = document.querySelectorAll(".text-color");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.color = "white";
    }
  }
}

localStorage.clear(argb, brgb, crgb, drgb);
