// function showError(input, message) {
//   const error = input.nextElementSibling;
//   input.classList.add('invalid');
//   error.textContent = message;
// }
// document.getElementById('validationForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     let isValid = true;
    
//     document.querySelectorAll('.error').forEach(el => el.textContent = '');
//     document.querySelectorAll('input,select').forEach(el => el.classList.remove('invalid'));
//     const fullname=document.getElementById('fullname').value.trim();
//     if(fullname===''){
//         ShowError(fullname,"fullname cannot be empty");
//         isValid = false;
//     }

//     const email=document.getElementById('email').value.trim();
//     var atposition = email.indexOf("@");
//     var dotposition = email.lastIndexOf(".");
//     if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){
//         ShowError(email,"Please enter a valid e-mail address");
//         isValid = false;
//     }

//     const password = document.getElementById('password').value;
//     if(password.length < 6){
//         ShowError(password,"Password must be at least 8 characters long");
//         isValid = false;
//     }

//     const confirmPassword = document.getElementById('confirmPassword').value;
//     if(password !== confirmPassword){
//         ShowError(confirmPassword,"Passwords do not match");
//         isValid = false;
//     }

//     const phonenumber = document.getElementById('phone').value.trim();
//     if(!/^\d{10}$/.test(phonenumber)){
//         ShowError(phonenumber,"Phone number must be exactly 10 digits");
//         isValid = false;
//     }

//     const gender=document.querySelector('input[name="gender"]:checked');
//     if(!gender){
//         const error = document.querySelector('.error')[5];
//         error.textContent="please select a gender";
//         isValid = false;
//     }

//     const hobbies=document.querySelectorAll('input[name="hobbies"]:checked');
//     if(hobbies.length === 0){
//         const error = document.querySelector('.error')[6];
//         error.innerHtml="please select at least one hobby";
//         isValid = false;
//     }

//     const country=document.getElementById('country').value;
//     if(country === ''){
//         ShowError(country,"please select a country");
//         isValid = false;
//     }   

//     if(isValid){
//         alert('Form submitted successfully!');
//         this.reset();
//     }


// });
document.getElementById('validationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let valid = true;

  // Reset all errors
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  document.querySelectorAll('input, select').forEach(el => el.classList.remove('invalid'));

  // Full Name
  const fullName = document.getElementById('fullName');
  if (fullName.value.trim() === '') {
    showError(fullName, 'Full name cannot be empty.');
    valid = false;
  }

  // Email
  const email = document.getElementById('email');
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value.trim())) {
    showError(email, 'Invalid email format (e.g. name@example.com)');
    valid = false;
  }

  // Password
  const password = document.getElementById('password');
  if (password.value.length < 6) {
    showError(password, 'Password must be at least 6 characters.');
    valid = false;
  }

  // Confirm Password
  const confirmPassword = document.getElementById('confirmPassword');
  if (confirmPassword.value !== password.value || confirmPassword.value === '') {
    showError(confirmPassword, 'Passwords do not match.');
    valid = false;
  }

  // Phone Number
  const phone = document.getElementById('phone');
  if (!/^[0-9]{10,}$/.test(phone.value.trim())) {
    showError(phone, 'Phone must be numbers only (min 10 digits).');
    valid = false;
  }

  // Gender
  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    const error = document.querySelectorAll('.error')[5];
    error.textContent = 'Please select gender.';
    valid = false;
  }

  // Hobbies
  const hobbies = document.querySelectorAll('input[name="hobby"]:checked');
  if (hobbies.length === 0) {
    const error = document.querySelectorAll('.error')[6];
    error.textContent = 'Select at least one hobby.';
    valid = false;
  }

  // Country
  const country = document.getElementById('country');
  if (country.value === '') {
    showError(country, 'Please select your country.');
    valid = false;
  }

  if (valid) {
    alert('Form submitted successfully!');
    this.reset();
  }
});

function showError(input, message) {
  const error = input.nextElementSibling;
  input.classList.add('invalid');
  error.textContent = message;
}

