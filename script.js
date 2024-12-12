var form = document.getElementById('form');
var formContainer = document.getElementById('formContainer');
var submitForm = document.getElementById('submitForm');
var successMsg = document.getElementById('successMsg');
var successBtn = document.getElementById('successBtn');
var userInput = document.getElementById('userMail');
var mail = document.getElementById('email');
var errorMsg = document.getElementById('errorMsg')
    


function handleSubmit(e) {
    e.preventDefault()
  }

function validateForm(event) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    userInput.innerHTML = mail.value.trim() + '.';

    if (emailRegex.test(mail.value)) {
        formContainer.style.display = "none";
        successMsg.style.display = "block";
        return true;

    } 

    else{
        errorMsg.classList.remove('hidden');
        mail.classList.add('error');
    }
    
}

function reload(event){
    formContainer.style.display = 'flex';
    successMsg.style.display = 'none'
}

successBtn.addEventListener('click', reload)
submitForm.addEventListener('click', validateForm);
submitForm.addEventListener('click', handleSubmit);
