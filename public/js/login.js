const submitBtn = document.querySelector("#submitBtn");

function outlineError(field) {
  field.style.outline = "2px solid #F87171";
}

function removeOutlineError(field) {
  field.style.outline = "0";
}

function showAlertMsg(msg) {
  const alertMsg = document.getElementById("alert");
  
  alertMsg.classList.remove("-top-32");
  alertMsg.classList.add("top-5");
  setTimeout(() => {
    alertMsg.classList.remove("top-5");
    alertMsg.classList.add("-top-32");
  }, 3000);
  alertMsg.innerHTML = `<span class="material-symbols-outlined">error</span>&nbsp<span">${msg}</span>`;
}

function showSuccessMsg(msg) {
  const alertMsg = document.getElementById("alertSuccess");
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

  if (password.type === 'password') {
    password.type = 'text';
    passwordLabel.textContent = 'hide';
  }
  else {
    password.type = 'password';
    passwordLabel.textContent = 'show';
  }
})

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const form = document.querySelector("#myForm");
    
    if (username.value == '') {
      outlineError(username);
      let msg = "Username field cannot be empty.";
      showAlertMsg(msg);
      return;
    }
    else {
      removeOutlineError(username);
    }
    if (password.value < 8) {
      outlineError(password);
      let msg = "Password must be atleast 8 characters long";
      showAlertMsg(msg);
          return;
        }
        else {
          removeOutlineError(password);
        }
        
        return form.submit();
      })