const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('All fields must be filled!');
  } else {
    const userDetails = { email: email.value, Password: password.value }
    
    console.log(userDetails)
    event.currentTarget.reset();
  }
}