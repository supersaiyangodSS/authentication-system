const nextBtn = document.getElementById("form-btn-next");
const section1 = document.getElementById("form-section-1");
const section2 = document.getElementById("form-section-2");
const btnBack = document.getElementById("btn-back");
const loaderContainer = document.getElementById("loader-container");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("myForm");
function hideSection(section) {
  section.classList.remove("flex");
  section.classList.add("hidden");
}
function outlineError(field) {
  field.style.outline = "2px solid #F87171";
}

function removeOutlineError(field) {
  field.style.outline = "0";
}

function showAlertMsg(msg) {
  const alertMsg = document.getElementById('alert');

  alertMsg.classList.remove("-top-32");
  alertMsg.classList.add("top-5");
  setTimeout(() => {
    alertMsg.classList.remove("top-5");
    alertMsg.classList.add("-top-32");
  }, 3000);
  alertMsg.innerHTML = `<span class="material-symbols-outlined">error</span>&nbsp<span">${msg}</span>`;
}

const passwordToggle = document.getElementById('passwordToggle');
passwordToggle.addEventListener('change', () => {
  let password = document.querySelector('#password');
  let passwordLabel = document.querySelector('#passwordLabel');
  let confirmPassword = document.querySelector('#confirmPassword');

  if (password.type === 'password') {
    password.type = 'text';
    confirmPassword.type = 'text';
    passwordLabel.textContent = 'hide';
  }
  else {
    password.type = 'password';
    confirmPassword.type = 'password';
    passwordLabel.textContent = 'show';
  }
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  if (password.value == "") {
    outlineError(password);
    let msg = "Password field cannot be empty.";
    showAlertMsg(msg);
    return;
  } else if (password.value.length < 8) {
    outlineError(password);
    let msg = "Password too short.";
    showAlertMsg(msg);
    return;
  } else {
    removeOutlineError(password);
  }

  if (confirmPassword.value == "") {
    outlineError(confirmPassword);
    let msg = "Confirm password field cannot be empty.";
    showAlertMsg(msg);
    return;
  } else if (password.value != confirmPassword.value) {
    let msg = "Password do not match";
    showAlertMsg(msg);
    return;
  } else {
    removeOutlineError(confirmPassword);
    form.submit();
  }
  form.submit();
});
