document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const submitBtn = document.getElementById('submitBtn');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const formStatus = document.getElementById('formStatus');

  function validateForm() {
    let valid = true;

    // Name Validation
    if (name.value.trim().length < 2) {
      nameError.textContent = "Name must be at least two characters";
      valid = false;
    } else {
      nameError.textContent = '';
    }

    // Email Validation
    if (!email.value.includes('@') || !email.value.includes('.')) {
      emailError.textContent = 'Enter a valid email';
      valid = false;
    } else {
      emailError.textContent = '';
    }

    // Password Validation
    if (password.value.trim().length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters';
      valid = false;
    } else {
      passwordError.textContent = '';
    }

    // Enable/disable button
    submitBtn.disabled = !valid;
  }

  // Live validation as user types
  name.addEventListener('input', validateForm);
  email.addEventListener('input', validateForm);
  password.addEventListener('input', validateForm);

  // On submit
  form.addEventListener('submit', e => {
    e.preventDefault();
    validateForm();
    if (!submitBtn.disabled) {
      formStatus.style.color = 'green';
      formStatus.textContent = "Form submitted successfully!";
      form.reset();
      submitBtn.disabled = true; // re-disable until user types again
    } else {
      formStatus.style.color = 'red';
      formStatus.textContent = "Please fix errors before submitting.";
    }
  });
});
