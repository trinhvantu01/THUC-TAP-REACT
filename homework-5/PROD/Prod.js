function main() {
    number = document.getElementById("number").value;
    number1 = document.getElementById("number1").value;

    if (number*number1 > 0) {
        alert("1");
    }else if(number*number1 < 0){
        alert("-1");
    }else{
        alert("0");
    }
}