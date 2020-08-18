const submitButton = document.getElementById("sbutton");
const unameInput = document.getElementById("uname");
const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
// console.dir(fnameInput);

const handleClick = (event) => {
  event.preventDefault();
};

const handleUnameBlur = (event) => {
  const charPattern = /\W/g;
  const whiteSpacePattern = / /g;
  if (
    charPattern.test(event.target.value) === true &&
    whiteSpacePattern.test(event.target.value) === false
  ) {
    event.target.classList.add("valid-input");
    event.target.classList.remove("invalid-input");
    if (document.getElementById("warning-username")) {
      document.getElementById("warning-username").remove();
    }
  } else {
    event.target.classList.remove("valid-input");
    event.target.classList.add("invalid-input");
    if (!document.getElementById("warning-username")) {
      const newWarning = document.createElement("p");
      newWarning.innerText =
        "The username must be a mix of letters, numbers and at least one special character";
      newWarning.setAttribute("id", "warning-username");
      document.getElementById("grid-iuname").appendChild(newWarning);
    }
  }
};

const handleInput = (event) => {
  const pattern = /^[-a-z ']+$/gim;
  console.dir(event);
  if (pattern.test(event.target.value) !== true) {
    event.target.classList.remove("valid-input");
    event.target.classList.add("invalid-input");
  } else {
    event.target.classList.add("valid-input");
    event.target.classList.remove("invalid-input");
  }
};

submitButton.addEventListener("click", handleClick);
unameInput.addEventListener("blur", handleUnameBlur);
fnameInput.addEventListener("input", handleInput);
lnameInput.addEventListener("input", handleInput);
