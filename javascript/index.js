const form = document.querySelector("#form");
const email = document.querySelector(".email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (regEx.test(email.value)) {
    document.querySelector(".form").style.display = "none";
    document.querySelector(".main-heading").style.display = "none";
    document.querySelector(".main-paragraph").style.display = "none";

    document.querySelector(".confirmation-heading").style.display = "block";
    document.querySelector(".confirmation-paragraph").style.display = "block";
    return true;
  } else {
    return false;
  }
});
