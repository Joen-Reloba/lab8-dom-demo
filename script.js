// include all ids
const title = document.getElementById("title");
const name = document.getElementById("nameInput");
const age = document.getElementById("ageInput");
const output = document.getElementById("output");

// query selector
const description = document.getElementById("description");
const button = document.getElementById("btnClick");

//event handler
button.addEventListener("click", function () {
  // visual content

  button.textContent = "Clicked!";

  let name = nameInput.value;
  let age = ageInput.value;

  output.innerHTML = "<p style='color:green'>Button was clicked</p>";

  //loose equality
  if (age == 18) {
    output.innerHTML += "<p style='color:yellow'>You are an adult</p>";
  } else if (age < 18) {
    output.innerHTML += "<p style='color:red'>You are a minor</p>";
  }

  //strict equality
  if (age === 18) {
    output.innerHTML += "<p style='color:blue'>You are an adult (strict)</p>";
  } else {
    output.innerHTML += "<p style='color:purple'>You are a minor</p>";
  }

  if (name != "") {
    output.innerHTML +=
      "<p style='color:black'>Hello!" +
      name +
      " I am " +
      age +
      " years old.</p>";
  } else {
    output.innerHTML += "<p style='color:black'>Hello! Stranger Danger</p>";
  }
});
