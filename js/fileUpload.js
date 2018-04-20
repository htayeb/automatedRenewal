function updateFileName(customFile, customLabel) {
    var img1 = document.getElementById(customFile);
    var file_name = document.getElementById(customFile);
    var fileNameIndex = img1.value.lastIndexOf("\\");
    console.log(fileNameIndex);
    document.getElementById(customLabel).innerHTML = file_name.value;
    file_name.value = img1.value.substring(fileNameIndex + 1);


}