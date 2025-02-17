const openModalBtn = document.querySelector('[data-action="open-modal"]');
const modal = document.querySelector('[data-action="modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');

openModalBtn.addEventListener("click", (event) => {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", (event) => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

const radios = document.querySelectorAll("input");

radios.forEach(radio => {
  radio.addEventListener("change", (event) => {
    document.body.style.backgroundColor = event.target.value;
  });

});


const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
    if (nameInput.value) {
        nameOutput.textContent = nameInput.value;
    } else {
        nameOutput.textContent = "незнайомець";
    }
});



const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSizeControl.addEventListener("input", () => {
    text.style.fontSize = `${fontSizeControl.value}px`;
});