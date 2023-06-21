/*=============== SHOW HIDE - LOGIN & REGISTER FORM ===============*/
const loginForm = document.getElementById('login-form'),
  registerForm = document.getElementById('register-form'),
  loginBtn = document.getElementById('login-btn'),
  registerBtn = document.getElementById('register-btn');

/*===== SHOW REGISTER =====*/
/* Validate if constant exists */
if (registerBtn) {
  registerBtn.addEventListener('click', () => {
    loginForm.classList.remove('form-active');
    registerForm.classList.add('form-active');
  });
}

/*===== SHOW LOGIN =====*/
/* Validate if constant exists */
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    loginForm.classList.add('form-active');
    registerForm.classList.remove('form-active');
  });
}

/*=============== SHOW HIDE - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass),
    iconEye = document.getElementById(loginEye);

  iconEye.addEventListener('click', () => {
    // change password to text
    if (input.type === 'password') {
      // switch to text
      input.type = 'text';

      // icon change
      iconEye.classList.add('ri-eye-line');
      iconEye.classList.remove('ri-eye-off-line');
    }
    else {
      // change to password
      input.type = 'password';

      // icon change
      iconEye.classList.remove('ri-eye-line');
      iconEye.classList.add('ri-eye-off-line');
    }
  });
};

showHiddenPass('login-pass', 'login-eye');
showHiddenPass('register-pass', 'register-eye');
