var form = document.querySelector('.form-container');
var { firstName, lastName, mail, msg } = form.elements;

form.addEventListener('change', () => {
  var obj = {};

  if (firstName.value.trim() !== '') {
    obj.fName = firstName.value.trim();
  }
  if (lastName.value.trim() !== '') {
    obj.lName = lastName.value.trim();
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

var { fName, lName, userEmail, userMessage } = JSON.parse(
  localStorage.getItem('formData')
);

firstName.value = fName || '';
lastName.value = lName || '';
mail.value = userEmail || '';
msg.value = userMessage || '';
