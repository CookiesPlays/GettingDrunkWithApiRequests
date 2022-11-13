var argb,brgb,crgb,drgb;

 var buttona = document.querySelector('.buttona');
 buttona.onclick = function () {
    console.log("Button A has been pressed")
  var red = Math.floor(Math.random() * 256);
  localStorage.setItem("ra",red);
  console.log(red);
  var blue = Math.floor(Math.random() * 256);
  localStorage.setItem("ba",blue);
  console.log(blue);
  var green = Math.floor(Math.random() * 256);
  localStorage.setItem("ga",green);
  console.log(green);
argb="rgb(" + red + "," + green + "," + blue + ")";

  this.style.backgroundColor = argb;
  document.querySelector(".colora").style.backgroundColor = argb;
  localStorage.setItem("argb", argb);
 };


 var buttonb = document.querySelector('.buttonb');
 buttonb.onclick = function () {
    console.log("Button B has been pressed")
  var red = Math.floor(Math.random() * 256);
  localStorage.setItem("rb",red);
  console.log(red);
  var blue = Math.floor(Math.random() * 256);
  localStorage.setItem("bb",blue);
  console.log(blue);
  var green = Math.floor(Math.random() * 256);
  localStorage.setItem("gb",green);
  console.log(green);
brgb="rgb(" + red + "," + green + "," + blue + ")";

  this.style.backgroundColor = brgb;
  document.querySelector(".colorb").style.backgroundColor = brgb;
  localStorage.setItem("brgb", brgb);
 };


 var buttonc = document.querySelector('.buttonc');
 buttonc.onclick = function () {
    console.log("Button C has been pressed")
  var red = Math.floor(Math.random() * 256);
  localStorage.setItem("rc",red);
  console.log(red);
  var blue = Math.floor(Math.random() * 256);
  localStorage.setItem("bc",blue);
  console.log(blue);
  var green = Math.floor(Math.random() * 256);
  localStorage.setItem("gc",green);
  console.log(green);
crgb="rgb(" + red + "," + green + "," + blue + ")";

  this.style.backgroundColor = crgb;
  document.querySelector(".colorc").style.backgroundColor = crgb;
  localStorage.setItem("crgb", crgb);
 };


 var buttona = document.querySelector('.buttond');
 buttona.onclick = function () {
    console.log("Button D has been pressed")
  var red = Math.floor(Math.random() * 256);
  localStorage.setItem("rd",red);
  console.log(red);
  var blue = Math.floor(Math.random() * 256);
  localStorage.setItem("bd",blue);
  console.log(blue);
  var green = Math.floor(Math.random() * 256);
  localStorage.setItem("gd",green);
  console.log(green);
drgb="rgb(" + red + "," + green + "," + blue + ")";

  this.style.backgroundColor = drgb;
  document.querySelector(".colord").style.backgroundColor = drgb;
  localStorage.setItem("drgb", drgb);
 };



