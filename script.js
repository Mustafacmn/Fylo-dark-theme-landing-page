const warningEl = document.getElementById("warning-el");
const emailEl = document.getElementById("email-el");
const btnEl = document.getElementById("btn-el");


var emailEx = "email@example.com"
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

btnEl.addEventListener("click", () => {
  const input = emailEl.value;
  
  if(input) { // If input field is not empty
    if(emailRegex.test(input)){
      warningEl.innerHTML = `
      <p class="text-green-400">Email sent!</p>
      `
    } else{
      warningEl.innerHTML = `
      <p class="text-red-400">Please enter a valid email!</p>
      `
    }
  } else {
    warningEl.innerHTML = `
      <p class="text-red-400">Please enter your email!</p>
      `
  }
})