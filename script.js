function storePassword() {
  let site = document.getElementById("site").value;
  let password = document.getElementById("password").value;
  if (site && password) {
    let list = document.getElementById("passwords");
    let li = document.createElement("li");
    li.textContent = `${site}: ********`; // Masking password
    list.appendChild(li);
    document.getElementById("site").value = "";
    document.getElementById("password").value = "";
  }
}
