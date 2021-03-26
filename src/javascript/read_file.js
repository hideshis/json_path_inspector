window.addEventListener("change", () => {
    var inputFile = document.getElementById("inputFile").files[0];
    console.log(inputFile);
    if (inputFile.type.indexOf("image") == 0) {
        var reader = new FileReader();
        reader.onload = function(){
            document.querySelector("#viewImage").src = reader.result;
        }
        reader.readAsDataURL(inputFile);
    }
    document.getElementById("fileName").innerHTML = inputFile.name;
    document.getElementById("fileType").innerHTML = inputFile.type;
});