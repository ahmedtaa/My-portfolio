const form = document.querySelector('.form-container');
const email = form.elements['mail'];



form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (email.value !== email.value.toLowerCase()) {
      document.querySelector('.error').style.display = 'block';
    return false;
  }
    
    form.submit();
    return true;
});