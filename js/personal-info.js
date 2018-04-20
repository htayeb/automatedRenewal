var errorMessage = "Please Enter";

function validateAllFields(event) {
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


    if (errorMessage != "") {
        event.preventDefault();
        document.getElementById("placeholder-warning").classList.add("alert-warning");
        document.getElementById("placeholder-warning").classList.add("alert");

        var para = document.createElement("i");
        para.classList.add("material-icons");
        para.innerHTML = "report_problem";
        var para2 = document.createTextNode(errorMessage);

        document.getElementById("placeholder-warning").appendChild(para);
        document.getElementById("placeholder-warning").appendChild(para2);

        errorMessage = "Please Enter";
        return false;
    }
}

function createErrorMessage(message, append, element) {
    console.log(element);
    console.log(element == "");
    if (element == "") {
        console.log(message == "Please Enter");
        if (message == "Please Enter") {
            console.log(message + " " + append);
            return message + " " + append;
        } else {
            return message + ", " + append;
        }
    }
    return message;
}