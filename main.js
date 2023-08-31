let frm = document.getElementById("frm"),
vid = document.getElementById("vid");

function validateForm() {
  let x, i, valid = true;
  x = document.getElementsByTagName("input");
  for (let i = 0; i < x.length; i++) {
    // if field is empty
    if (x[i].value == "") {
      alert("Input field can't be empty");
      valid = false;
    }
  }

  if (valid) {
    frm.style.display = 'none';
    vid.style.display = 'block';
  }
  return valid
}

function clicker() {
 validateForm();
}