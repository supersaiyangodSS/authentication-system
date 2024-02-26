const submitBtn = document.querySelector("#submitBtn");

function outlineError(field) {
  field.style.outline = "2px solid #F87171";
}

function removeOutlineError(field) {
  field.style.outline = "0";
}

function validateEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
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

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name");
  const message = document.querySelector("#message");
  const form = document.querySelector("#myForm");

  if (name.value == "") {
    outlineError(name);
    let msg = "Name field cannot be empty.";
    showAlertMsg(msg);
    return;
  } else {
    removeOutlineError(name);
  }
  if (!validateEmail(email.value)) {
    outlineError(email);
    let msg = "Invalid Email, Please provide a valid email.";
    showAlertMsg(msg);
    return;
  } else {
    removeOutlineError(email);
  }
  if (message.value == "") {
    outlineError(message);
    let msg = "Message field cannot be empty.";
    showAlertMsg(msg);
    return;
  } else {
    removeOutlineError(message);
  }

  return form.submit();
});
