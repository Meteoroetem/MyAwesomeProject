function ButtonPress(){
    var msg = document.getElementById("form1").value;
    msgArr = Array.from(msg)
    for(let i = 0; i < msgArr.length; i++){
        msgArr[i] = Translate(msgArr[i])
    }
    //alert(msgArr.join(''));
    document.getElementById("Result").innerText = msgArr.join('')
}

var pTextBoxValue = "";
var textBoxLength = 0;
var textBoxValue = ""

function ChangeLength(){
    textBoxValue = document.getElementById("form1").value;
    /*textBoxLength = parseInt(document.getElementById("form1").getAttribute("size"));
        if(textBoxValue.split('').length > pTextBoxValue.split('').length){
            document.getElementById("form1").setAttribute("size", textBoxLength + 1);
        }
        else
        {
            document.getElementById("form1").setAttribute("size", textBoxLength - 1);
        }
        pTextBoxValue = document.getElementById("form1").value;*/
    document.getElementById("form1").setAttribute("size", textBoxValue.split('').length)
}

    