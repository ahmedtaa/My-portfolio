const form = document.querySelector('.form-container');
const { firstName, lastName, mail, msg } = form.elements;

form.addEventListener('change', () => {
  const obj = {};

  if (firstName.value.trim() !== '') {
    obj.firstName = firstName.value.trim();
  }
  if (lastName.value.trim() !== '') {
    obj.lastName = lastName.value.trim();
  }

  if (mail.value.trim() !== '') {
    obj.userEmail = mail.value.trim();
  }

  if (msg.value.trim() !== '') {
    obj.userMessage = msg.value.trim();
  }

  localStorage.setItem('formData', JSON.stringify(obj));
});

// set the localStorage data to the form

const formObj = JSON.parse(localStorage.getItem('formData'));
const { userFirstname, userLastname, userMail, userrMsg } = formObj;

firstName.value = userFirstname || '';
lastName.value = userLastname || '';
mail.value = userMail || '';
msg.value = userrMsg || '';
