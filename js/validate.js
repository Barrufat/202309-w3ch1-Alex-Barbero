const formBox = document.querySelector(".form");
const remitentInputElement = formBox.querySelector("#remitent");
const destinatorInputElement = formBox.querySelector("#destinator");
const issueInputElement = formBox.querySelector("#issue");
const descriptionInputElement = formBox.querySelector("#description");
const programInputElement = formBox.querySelector("#program");
const dateInputElement = formBox.querySelector("#date");
const dateLabelElement = formBox.querySelector("#date-label");

let remitent;
let destinator;
let issue;
let description;
let program;
let date;

formBox.addEventListener("input", (event) => {
  switch (event.target) {
    case remitentInputElement:
      remitent = event.target.value;
      break;
    case destinatorInputElement:
      destinator = event.target.value;
      break;
    case issueInputElement:
      issue = event.target.value;
      break;
    case descriptionInputElement:
      description = event.target.value;
      break;
    case programInputElement:
      program = event.target.value;
      if (programInputElement.checked) {
        dateLabelElement.classList.remove("off");
      } else {
        dateLabelElement.classList.add("off");
        date = "";
      }
      break;
    case dateInputElement:
      date = event.target.value;
      break;
    default:
  }
});

const validateForm = () => {
  if (remitent && destinator && issue && description && date) {
    if (
      remitent.includes("@") &&
      remitent.includes(".") &&
      destinator.includes("@") &&
      destinator.includes(".")
    ) {
      if (description.length > 10) {
        const actualDate = new Date();
        const actualYear = parseInt(actualDate.getFullYear()) * 365;
        const actualMonth = parseInt(actualDate.getMonth() + 1) * 30;
        const actualDay = parseInt(actualDate.getDate());
        const acumulatedDays = actualYear + actualMonth + actualDay;
        console.log(acumulatedDays);

        const splitedDate = date.split("-");
        const programYear = parseInt(splitedDate[0]) * 365;
        const programMonth = parseInt(splitedDate[1]) * 30;
        const programDay = parseInt(splitedDate[2]);

        const acumulatedProgram = programYear + programMonth + programDay;
        console.log(acumulatedProgram);
        if (acumulatedProgram > acumulatedDays) {
          console.log("Envio realizado con éxito!");
        } else {
          console.log("La fecha no es válida");
        }
      } else {
        console.log("El texto es demasiado corto");
      }
    } else {
      ("El remitente y destinatario deben contener . y @ ");
    }
  } else {
    console.log("Rellena todos los campos correctamente");
  }
};
