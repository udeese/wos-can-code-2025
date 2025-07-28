const firstNameInput = document.querySelector('#first-name');
const emailInput = document.querySelector('#email');
const tierSelect = document.querySelector('#tier');

const howDidYouHears = document.getElementsByName('how-did-you-hear');

function subscribe() {
  const firstName = firstNameInput.value;
  const email = emailInput.value;
  const tier = tierSelect.value;

  let howDidYouHear;

  howDidYouHears.forEach((radioButton) => {
    if (radioButton.checked) {
      howDidYouHear = radioButton.value;
    }
  });

  alert(`Thank you for subscribing.
First name: ${firstName}
Email: ${email}
Tier: ${tier}
You heard: ${howDidYouHear}
`);
}
