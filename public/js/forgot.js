const submitBtn = document.querySelector("#submitBtn");
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


submitBtn.addEventListener("click", (e) => {
  let email = document.querySelector('#email');
    e.preventDefault();
    if (email.value == '') {
      outlineError(email);
      let msg = "Email field cannot be empty";
      showAlertMsg(msg);
      return;
    }
    else if (!validateEmail(email.value)) {
      outlineError(email);
      let msg = "Invalid Email, Please provide a valid email.";
      showAlertMsg(msg);
      return;
    } else {
      removeOutlineError(email);
      form.submit();
    }
});
