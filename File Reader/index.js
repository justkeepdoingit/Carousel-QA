const fileInput = document.querySelectorAll('input[type="file"]');
const preview = document.querySelectorAll(".md-teaser-image");
const png = document.querySelectorAll(".carousel-png");
let reader = new FileReader();

let firstDrop = true;

function handleEvent(event) {
  if (event.type === "load") {
    for (let i = 0; i < preview.length; i++) {
      if (firstDrop == false) {
        for (let k = 0; k < png.length; k++) {
          png[k].setAttribute("src", `${reader.result}`);
        }

        return;
      }
      preview[i].style.backgroundImage = `url(${reader.result})`;
    }
    document.querySelector(".drop-container").classList.remove("no-content");
    document.querySelector(".background").classList.remove("absolute");
    firstDrop = false;
  }
}

function addListeners(reader) {
  reader.addEventListener("loadstart", handleEvent);
  reader.addEventListener("load", handleEvent);
  reader.addEventListener("loadend", handleEvent);
  reader.addEventListener("progress", handleEvent);
  reader.addEventListener("error", handleEvent);
  reader.addEventListener("abort", handleEvent);
}
function handleSelected(e) {
  const selectedFile = fileInput;
  for (let i = 0; i < selectedFile.length; i++) {
    if (selectedFile[i].files[0]) {
      reader = new FileReader();
      addListeners(reader);
      reader.readAsDataURL(selectedFile[i].files[0]);
    }
  }
}
for (let i = 0; i < fileInput.length; i++) {
  fileInput[i].addEventListener("change", handleSelected);
}

function createFrag(tag, string) {
  let frag = document.createDocumentFragment(),
    el = document.createElement(tag);
  el.innerHTML = string;
  while (el.firstChild) {
    frag.appendChild(el.firstChild);
  }
  return frag;
}

let inputs = document.querySelectorAll(".input-text > input");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", (e) => {
    if (e.target.classList.contains("title-input")) {
      let title = document.querySelectorAll(".title");

      for (let j = 0; j < title.length; j++) {
        console.log("test");
        title[j].innerHTML = "";
        title[j].append(createFrag("span", e.target.value.toUpperCase()));
      }
      return;
    }
    let subtitle = document.querySelectorAll(".subtitle");
    for (let k = 0; k < subtitle.length; k++) {
      subtitle[k].innerHTML = "";
      subtitle[k].append(createFrag("span", e.target.value.toUpperCase()));
    }
  });
}
document.querySelector('input[type="file"]').addEventListener("click", (e) => {
  if (e.target.value) e.preventDefault();
});

(function changeBrand() {
  let currentClass = "betcasino";
  let parent = document.querySelector(".teasers"),
    childElements = parent.querySelectorAll("div, a, p"),
    mobileParent = document.querySelector(".teaser-mobile"),
    mobileChild = mobileParent.querySelectorAll("div, a, p");
  function state(newClass) {
    for (let i = 0; i < childElements.length; i++) {
      childElements[i].classList?.remove(`${currentClass}`);
      childElements[i].classList?.add(`${newClass}`);
    }
  }
  function stateMobile(newClass) {
    for (let i = 0; i < mobileChild.length; i++) {
      mobileChild[i].classList?.remove(`${currentClass}`);
      mobileChild[i].classList?.add(`${newClass}`);
    }
  }
  document.querySelector("#brands").addEventListener("change", (e) => {
    switch (e.target.value) {
      case "betcasino":
        state(e.target.value);
        stateMobile(e.target.value);
        currentClass = e.target.value;
        break;
      case "betpoker":
        state(e.target.value);
        stateMobile(e.target.value);
        currentClass = e.target.value;
        break;
    }
  });
})();
