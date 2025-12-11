// This method list down states for the select component when page gets loaded

function loadState() {
  const usStatesArray = [
    { value: "None", text: "Select State..." },
    { value: "AL", text: "Alabama" },
    { value: "AK", text: "Alaska" },
    { value: "AZ", text: "Arizona" },
    { value: "AR", text: "Arkansas" },
    { value: "CA", text: "California" },
    { value: "CO", text: "Colorado" },
    { value: "CT", text: "Connecticut" },
    { value: "DC", text: "District of Columbia" },
    { value: "DE", text: "Delaware" },
    { value: "FL", text: "Florida" },
    { value: "GA", text: "Georgia" },
    { value: "HI", text: "Hawaii" },
    { value: "ID", text: "Idaho" },
    { value: "IL", text: "Illinois" },
    { value: "IN", text: "Indiana" },
    { value: "IA", text: "Iowa" },
    { value: "KS", text: "Kansas" },
    { value: "KY", text: "Kentucky" },
    { value: "LA", text: "Louisiana" },
    { value: "ME", text: "Maine" },
    { value: "MD", text: "Maryland" },
    { value: "MA", text: "Massachusetts" },
    { value: "MI", text: "Michigan" },
    { value: "MN", text: "Minnesota" },
    { value: "MS", text: "Mississippi" },
    { value: "MO", text: "Missouri" },
    { value: "MT", text: "Montana" },
    { value: "NE", text: "Nebraska" },
    { value: "NV", text: "Nevada" },
    { value: "NH", text: "New Hampshire" },
    { value: "NJ", text: "New Jersey" },
    { value: "NM", text: "New Mexico" },
    { value: "NY", text: "New York" },
    { value: "NC", text: "North Carolina" },
    { value: "ND", text: "North Dakota" },
    { value: "OH", text: "Ohio" },
    { value: "OK", text: "Oklahoma" },
    { value: "OR", text: "Oregon" },
    { value: "PA", text: "Pennsylvania" },
    { value: "RI", text: "Rhode Island" },
    { value: "SC", text: "South Carolina" },
    { value: "SD", text: "South Dakota" },
    { value: "TN", text: "Tennessee" },
    { value: "TX", text: "Texas" },
    { value: "UT", text: "Utah" },
    { value: "VT", text: "Vermont" },
    { value: "VA", text: "Virginia" },
    { value: "WA", text: "Washington" },
    { value: "WV", text: "West Virginia" },
    { value: "WI", text: "Wisconsin" },
    { value: "WY", text: "Wyoming" },
  ];
  const selectStateElement = document.getElementById("statesSelect");
  usStatesArray.forEach((state) => {
    const option = document.createElement("option");
    option.value = state.value;
    option.text = state.text;
    selectStateElement.appendChild(option);
  });
}

//User Name Validation

function userNameValidation(userNameValue) {
  console.log(userNameValue);
  if (!userNameValue) {
    console.log("Username cannot be empty.");
  }
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{5,19}$/;
  console.log(usernameRegex.test(userNameValue));
  if (!usernameRegex.test(userNameValue)) {
    console.log(
      "Username must start with a letter, and can only contain letters, numbers, and underscores. It must be 6-20 characters long."
    );
    alert(
      "Username must start with a letter, and can only contain letters, numbers, and underscores. It must be 6-20 characters long."
    );
  }
}

//password Validation

function validatePassword(passwordValue) {
  console.log(passwordValue);
  if (!passwordValue) {
    console.log("Password cannot be empty.");
  }
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/;
  console.log(passwordRegex.test(passwordValue));
  if (!passwordRegex.test(passwordValue)) {
    console.log("Wrong Password");
    alert(
      "Password must contain at least one digit, one lowercase, one uppercase, special character [!@#$%^&*()-+.] and must be between 6 and 20 characters in length.       'Abcdef123!'"
    );
  }
}

//Re-type password

function validateRetypePassword(repasswordValue) {
  console.log(repasswordValue);
  if (!repasswordValue) {
    console.log("Password cannot be empty.");
  }
  const repasswordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/;
  console.log(repasswordRegex.test(repasswordValue));
  if (!repasswordRegex.test(repasswordValue)) {
    console.log("Wrong Password");
    alert(
      "Password must contain at least one digit, one lowercase, one uppercase, special character [!@#$%^&*()-+.] and must be between 6 and 20 characters in length.       'Abcdef123!' "
    );
  }
}

// Date Dispaly of Validation

$("#datepicker").datepicker({
  uiLibrary: "bootstrap5",
  format: "mm/dd/yyyy",
  autoclose: true,
  todayHighlight: true,
  /* startDate: '01/01/1900',
  endDate: '12/31/2100',
  disableDaysOfWeek: [],
  disableDates: []*/
});

// String only type in city name

function validateCityName(inputtxt) {
  const letters = /^[a-zA-Z]+$/;
  if (!letters.test(inputtxt)) alert("Please Type only String characters only");
}

// Number only type in zip

function validateZipNumber(inputnum) {
  const zipCodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
  if (!zipCodeRegex.test(inputnum))
    alert(
      "Please input Numeric characters only and it's must be 5 numbers...."
    );
}

// email id validation

function isValidEmaiId(emailValue) {
  console.log(emailValue);
  if (!emailValue) {
    console.log("Username cannot be empty.");
  }
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(emailValue)) {
    console.log("Invalid Email address must include @  .");
    alert("Invalid Email address email must include @ . ");
  }
}

// when the click sumbit botton this function called
function sumbitSignIn() {
  alert("Sign in Successfully");
}

//Here are some examples to inspire your functions:

//Form Validation:
function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}
console.log(validateEmail("test@example.com")); // true

//Random Project Picker:
const projects = ["Portfolio", "Blog", "Weather App"];

function getRandomProject() {
  const index = Math.floor(Math.random() * projects.length);
  return projects[index];
}
console.log(`Featured project: ${getRandomProject()}`);

//Total Price Calculation:
const prices = [19.99, 29.99, 49.99];

function getTotalPrice() {
  return prices.reduce((total, price) => total + price, 0);
}
console.log(`Total price: $${getTotalPrice()}`);

//Feedback Storage:
let feedback = [];

function addFeedback(message) {
  feedback.push(message);
  return feedback;
}
console.log(addFeedback("Great website!")); // ["Great website!"]
