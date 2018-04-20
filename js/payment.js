var errorMessage = "Please Enter Your ";

function validateAllFields(event) {
    const num = document.forms["infoForm"]["crdNum"].value;
    const name = document.forms["infoForm"]["crdName"].value;
    const exp = document.forms["infoForm"]["crdExp"].value;
    const code = document.forms["infoForm"]["crdCode"].value;

    console.log(num + " " + name);
    errorMessage = createErrorMessage(errorMessage, "Card Number", num);
    errorMessage = createErrorMessage(errorMessage, "Owner Name", name);
    errorMessage = createErrorMessage(errorMessage, "Expiration Date", exp);
    errorMessage = createErrorMessage(errorMessage, "Security Code", code);


    if (errorMessage != "Please Enter Your ") {
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
    if (element == "") {
        if (message == "Please Enter Your ") {
            return message + " " + append;
        } else {
            return message + ", " + append;
        }
    }
    return message;
}