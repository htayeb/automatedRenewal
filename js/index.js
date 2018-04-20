function goToDocumentUpload() {
    var lastName = document.getElementById("lastname").value;
    var dl = document.getElementById("dl").value;
    var keyword = document.getElementById("keyword").value;

    var isDLValid = /[0-9]{7}/.test(dl);

    if (!lastName) {
        throwError("Please enter your last name");
    } else if (!dl) {
        throwError("Please enter your driver licence number");
    } else if (!isDLValid) {
        throwError("Please enter a valid driver licence number");
    } else if (!keyword) {
        throwError("Please enter your keyword");
    } else {
        window.location.href = "document-upload.html";

    }

}

function goToPersonalInfo() {
    var dl = document.getElementById("customFile1").value;
    var secondary = document.getElementById("customFile2").value;
    var pPhoto = document.getElementById("customFile3").value;
    var verify = document.getElementById("customFile4").value;

    if (!dl) {
        throwError("Please upload your driver licence");
    } else if (!secondary) {
        throwError("Please upload your secondary ID");
    } else if (!pPhoto) {
        throwError("Please upload your portrait photo");
    } else if (!verify) {
        throwError("Please upload your photo of you holding your licence");
    } else {
        window.location.href = "personal-info.html";
    }

}

function goToPayment() {
    const weight = document.forms["infoForm"]["weight"].value;
    const height = document.forms["infoForm"]["height"].value;
    const sex = document.forms["infoForm"]["sex"].value;
    const eyes = document.forms["infoForm"]["eyes"].value;
    const hair = document.forms["infoForm"]["hair"].value;
    const email = document.forms["infoForm"]["email"].value;
    const phone = document.forms["infoForm"]["phone"].value;

    if (!weight) {
        throwError("Please enter your weight");
    } else if (!height) {
        throwError("Please enter your height");
    } else if (!sex) {
        throwError("Please enter your sex");
    } else if (!eyes) {
        throwError("Please enter your eye colour");
    } else if (!hair) {
        throwError("Please enter your hair colour");
    } else if (!email) {
        throwError("Please enter your email address");
    } else if (!phone) {
        throwError("Please enter your phone number");
    } else {
        window.location.href = "payment.html";
    }
}

function goToConfirmation() {
    const num = document.forms["infoForm"]["crdNum"].value;
    const name = document.forms["infoForm"]["crdName"].value;
    const exp = document.forms["infoForm"]["crdExp"].value;
    const code = document.forms["infoForm"]["crdCode"].value;

    var isCrCardNumberValid = /[0-9]{16}/.test(num);
    var isCodeValid = /[0-9]*/.test(code);

    if (!num) {
        throwError("Please enter your credit card number");
    } else if (!isCrCardNumberValid) {
        throwError("Please enter a valid credit card number");
    } else if (!name) {
        throwError("Please enter the name on your credit card");
    } else if (!exp) {
        throwError("Please enter your credit card's expiry date");
    } else if (!code) {
        throwError("Please enter your security code");
    } else if (!isCodeValid) {
        throwError("Please enter a valid security code");
    } else {
        window.location.href = "confirmation.html";
    }
}

function throwError(err) {
    event.preventDefault();
    document.getElementsByClassName("custom-warning")[0].classList.add("alert-warning");
    document.getElementsByClassName("custom-warning")[0].classList.add("alert");

    var para = document.createElement("i");
    para.classList.add("material-icons");
    para.innerHTML = "report_problem";
    var para2 = document.createTextNode(err);

    document.getElementsByClassName("custom-warning")[0].innerHTML = "";
    document.getElementsByClassName("custom-warning")[0].appendChild(para);
    document.getElementsByClassName("custom-warning")[0].appendChild(para2);
    document.getElementsByClassName("custom-warning")[0].removeAttribute('id');


}