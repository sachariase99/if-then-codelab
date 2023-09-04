/* du må både ændre koden her, og i din HTML, hvis det er nødvendigt.. */
const myAnswerSelect = document.getElementById('answerOne');
const myAnswerButton = document.getElementById('answerButton');
const myAnswerFeedbackElement = document.getElementById('answerFeedback');


/* Opgave 1: skriv en validering af svar i koden herunder. resultatet skal vises i myAnsverFeedbackElement når bruger trykker på myAnsverButton .
der et korrekte svar:
nej */

// myAnswerButton.addEventListener('click', (e) => {
//   e.preventDefault(); // Forhindrer standardformularindsendelse

//   const userAnswerText = myAnswerSelect.options[myAnswerSelect.selectedIndex].text.trim().toLowerCase();

//   if (userAnswerText === 'nej') {
//       myAnswerFeedbackElement.innerHTML = 'Svaret er korrekt!';
//   } else {
//       myAnswerFeedbackElement.innerHTML = 'Svaret er forkert.';
//   }
// });



/* Opgave 2: udkommenter opgave 1, og omskriv nu din funktion til to korrekte svar:
nej
ja i disney film */

myAnswerButton.addEventListener('click', (e) => {
  e.preventDefault(); // Forhindrer standardformularindsendelse

  const userAnswerValue = myAnswerSelect.value;

  if (userAnswerValue === 'false') {
      myAnswerFeedbackElement.innerHTML = 'Svaret er forkert.';
  } else {
      myAnswerFeedbackElement.innerHTML = 'Svaret er korrekt!';
  }
});



/*opgave 3: skriv en kode der valider formen med følgende elementer: (denne opgave er på extreme niveau) 

- korrekt e-mail type. brug funktionen "validateEmail(minEmail) til at checke en string med den indtastede email
- navnet skal være længere end 3 bogstaver, med realtime validering (brug keyup til at checke, og .lengt til at finde længden)
- alder skal være større end 12.
 du må gerne bare consol.logge de forskellige tests i konsollen, men hvis du kan må du gerne lave feedback i elementet formValideringResult.
*/

const myNameInput = document.getElementById('myName');
const myEmailInput = document.getElementById('myEmail');
const myAgeInput = document.getElementById('myAge');
const submitButton = document.getElementById('submitButton');
const formValideringResult = document.getElementById('formValideringResult');

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateName(name) {
    return name.length > 3;
}

function validateAge(age) {
    return parseInt(age) > 12;
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault(); // Forhindrer standardformularindsendelse

    const name = myNameInput.value;
    const email = myEmailInput.value;
    const age = myAgeInput.value;

    let validationMessage = '';

    if (!validateName(name)) {
        validationMessage += 'Navn skal være længere end 3 bogstaver. ';
    }

    if (!validateEmail(email)) {
        validationMessage += 'Ugyldig e-mailadresse. ';
    }

    if (!validateAge(age)) {
        validationMessage += 'Alder skal være større end 12. ';
    }

    if (validationMessage === '') {
        validationMessage = 'Formularen er gyldig.';
    }

    formValideringResult.innerHTML = validationMessage;
});