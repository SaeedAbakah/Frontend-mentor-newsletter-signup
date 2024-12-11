var form = document.getElementById('form');
var formContainer = document.getElementById('formContainer');
var submitForm = document.getElementById('submitForm');
var successMsg = document.getElementById('successMsg');
var successBtn = document.getElementById('successBtn');
var mobileScreen = window.matchMedia("(max-width:63px)");

function handleSubmit(e) {
    e.preventDefault() // prevent the default behaviour
  }

function validateForm(event) { // Add event parameter
    //  A more robust email regex (but still not perfect)
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var mail = document.getElementById('email');
    if (emailRegex.test(mail.value)) { // Use .test() and mail.value
        formContainer.style.display = "none";
        successMsg.style.display = "block";
        return true;
    } else {
        // Optionally, provide feedback to the user
        alert("Please enter a valid email address.");
        return false; // Important: Prevent form submission if invalid
    }
}

function reload(event){
    formContainer.style.display = 'grid';
    successMsg.style.display = 'none'
}

successBtn.addEventListener('click', reload)
submitForm.addEventListener('click', validateForm); // Remove the () here
submitForm.addEventListener('click', handleSubmit);
