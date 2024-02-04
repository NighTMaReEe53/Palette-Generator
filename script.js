let theBtn = document.querySelector(".theBtn");
let theContainer = document.querySelector(".container");
let theOverLay = document.querySelector(".overlay");
const maxBoxes = 18;

const generateColor = () => {
  theContainer.innerHTML = "";
  for (let i = 0; i < maxBoxes; i++) {
    let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);

    let theColor = `#${randomColor.padStart(6, "0")}`;

    let theLi = document.createElement("li");

    theLi.addEventListener("click", () => copyColor(theLi, theColor));

    theLi.classList.add("color");

    theLi.innerHTML = `
      <div class="background" style="background-color: ${theColor}"></div>
      <h2 class="name">${theColor}</h2>
    `;
    theContainer.appendChild(theLi);
  }
};

// Trigger Function
generateColor();

// copyColor Function

const copyColor = (element, theColor) => {
  let theElement = element.querySelector(".name");
  theOverLay.style.backgroundColor = theColor;
  document.body.style.overflow = "hidden";
  theOverLay.classList.add("show");

  navigator.clipboard.writeText(theColor).then(() => {
    theElement.innerHTML = "Copied !!";

    setTimeout(() => {
      theElement.innerHTML = theColor;
      theOverLay.classList.remove("show");
      document.body.style.overflow = "auto";
    }, 1500);
  });
};

theBtn.addEventListener("click", generateColor);
