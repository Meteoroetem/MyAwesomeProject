function ButtonPress(){
    var msg = document.getElementById("form1").value;
    alert(`You want ${msg}`);
}

var pTextBoxValue = "";
var textBoxLength = 0;
var textBoxValue = ""

function ChangeLength(){
    textBoxValue = document.getElementById("form1").value;
    textBoxLength = parseInt(document.getElementById("form1").getAttribute("size"));
        if(textBoxValue.split('').length > pTextBoxValue.split('').length){
            document.getElementById("form1").setAttribute("size", textBoxLength + 1);
        }
        else
        {
            document.getElementById("form1").setAttribute("size", textBoxLength - 1);
        }
        pTextBoxValue = document.getElementById("form1").value;
    }