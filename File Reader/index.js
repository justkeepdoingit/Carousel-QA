const fileInput = document.querySelector('input[type="file"]');
const preview = document.querySelectorAll(".md-teaser-image");
const reader = new FileReader();

function handleEvent(event) {
  if (event.type === "load") {
    for (let i = 0; i < preview.length; i++) {
      preview[i].style.backgroundImage = `url(${reader.result})`;
    }
    document.querySelector(".drop-container").classList.remove("no-content");
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
  const selectedFile = fileInput.files[0];
  if (selectedFile) {
    addListeners(reader);
    reader.readAsDataURL(selectedFile);
  }
}

fileInput.addEventListener("change", handleSelected);

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
