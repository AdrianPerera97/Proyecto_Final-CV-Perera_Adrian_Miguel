document.getElementById("button1").onclick = function () {
  window.open("./img/curso1.jpg");
};
document.getElementById("button2").onclick = function () {
  window.open("./img/curso2.jpg");
};
document.getElementById("button3").onclick = function () {
  window.open("./img/curso3.jpg");
};
document.getElementById("button4").onclick = function () {
  window.open("./img/curso4.jpg");
};
document.getElementById("button5").onclick = function () {
  window.open("./img/curso5.jpg");
};

function scaleCv() {
  document.body.classList.add("scale-cv");
}

function removeScale() {
  document.body.classList.remove("scale-cv");
}

let resumeButton = document.getElementById("resumen-button");

let areaCV = document.getElementById("area-cv");

let opt = {
  margin: 0,
  filename: "CV_Adrian-Miguel-Perera.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { format: "a4", orientation: "portrait" },
};

function generateResume() {
  html2pdf(areaCV, opt);
}

resumeButton.addEventListener("click", () => {
  scaleCv();
  generateResume();
  setTimeout(removeScale, 3000);
});
