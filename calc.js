
function clearall(){
    document.getElementById("result").value = ""
}

function back1() {
 var value = document.getElementById("result").value; document.getElementById("result").value = value.substr(0, value.length - 1); 
}