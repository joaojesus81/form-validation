const submitButton = document.getElementById("sbutton");
const unameInput = document.getElementById("uname");
// console.dir(unameInput);

const handleClick = (event) => {
  event.preventDefault();
};

const handleBlur = (event) => {
  const charPattern = /\W/g;
  const whiteSpacePattern = / /g;
  if (
    charPattern.test(event.target.value) === true &&
    whiteSpacePattern.test(event.target.value) === false
  ) {
    event.target.classList.add("valid-input");
    event.target.classList.remove("invalid-input");
    document.getElementById("warning-username").remove();
  } else {
    event.target.classList.remove("valid-input");
    event.target.classList.add("invalid-input");
    const newWarning = document.createElement("p");
    newWarning.innerText =
      "The username must be a mix of letters, numbers and at least one special character";
    newWarning.setAttribute("id", "warning-username");
    document.getElementById("grid-iuname").appendChild(newWarning);
  }
};

submitButton.addEventListener("click", handleClick);
unameInput.addEventListener("blur", handleBlur);
