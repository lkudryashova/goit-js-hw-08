const form = document.querySelector('.login-form');
const emailInput = form.querySelector('input[name="email"]');
const passwordInput = form.querySelector('input[name="password"]');

form.addEventListener('submit', () => {
  event.preventDefault();

  if (!emailInput.value.trim() || !passwordInput.value.trim()) {
    return alert('All form fields must be filled in.');
  }

  const formData = {
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
  };

  console.log(formData);

  form.reset();
});
