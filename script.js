const form = document.getElementById("form");
const email = document.getElementById("email");
const body = document.querySelector("body");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const emailVal = email.value;
    const valid = false;


    //Check that the email is not left empty
    if(emailVal === ""){
        alert("Email Cannot Be Empty");
        email.focus();
    }

    //Check validity of entered email
    else if(!isEmailValid(emailVal)){
       showError(email, "Please provide a valid email address");
       email.focus();
    }

    //Email is inputted and is valid
    else{
        const formDiv = email.parentElement;
        formDiv.classList.remove("error");
        body.innerHTML = `<h1 style="
        text-align:center; 
        text-transform:uppercase;
        color:green;">
        Thanks for submitting the form!</h1>`
        valid = true;
    }

    return valid;

});

// Utility class showing error messages
const showError = (input, message) => {
    const formDiv = input.parentElement;
   
    formDiv.classList.add('error');
    const errorMsg = formDiv.querySelector("small");
    errorMsg.textContent = message;
}

//Utility class to validate inputted email
const isEmailValid = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};
