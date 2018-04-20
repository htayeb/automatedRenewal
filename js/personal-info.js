var errorMessage = "";

function validateAllFields(event) {
    errorMessage = "Please enter your ";

    const weight = document.forms["infoForm"]["weight"].value;
    const height = document.forms["infoForm"]["height"].value;
    const sex = document.forms["infoForm"]["sex"].value;
    const eyes = document.forms["infoForm"]["eyes"].value;
    const hair = document.forms["infoForm"]["hair"].value;
    const email = document.forms["infoForm"]["email"].value;
    const phone = document.forms["infoForm"]["phone"].value;

    errorMessage = createErrorMessage(errorMessage, "Weight", weight);
    errorMessage = createErrorMessage(errorMessage, "Height", height);
    errorMessage = createErrorMessage(errorMessage, "Sex", sex);
    errorMessage = createErrorMessage(errorMessage, "Eyes", eyes);
    errorMessage = createErrorMessage(errorMessage, "Hair", hair);
    errorMessage = createErrorMessage(errorMessage, "Email", email);
    errorMessage = createErrorMessage(errorMessage, "Phone", phone);

    if (errorMessage != "Please enter your ") {
        event.preventDefault();
        document.getElementsByClassName("custom-warning")[0].classList.add("alert-warning");
        document.getElementsByClassName("custom-warning")[0].classList.add("alert");

        var para = document.createElement("i");
        para.classList.add("material-icons");
        para.innerHTML = "report_problem";
        var para2 = document.createTextNode(errorMessage);

        document.getElementsByClassName("custom-warning")[0].innerHTML = "";
        document.getElementsByClassName("custom-warning")[0].appendChild(para);
        document.getElementsByClassName("custom-warning")[0].appendChild(para2);
        document.getElementsByClassName("custom-warning")[0].removeAttribute('id');

    } else {
        window.location.href = "payment.html";
    }
}

function createErrorMessage(message, append, element) {
    if (element == "") {
        if (message == "Please enter your ") {
            console.log(message + " " + append);
            return message + " " + append;
        } else {
            return message + ", " + append;
        }
    }
    return message;
}