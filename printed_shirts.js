function shirt() {
    var a = document.getElementById('qua').value;
    var total = document.getElementById('total').value;

    var size = document.getElementById('sz').value;
    var total1 = document.getElementById('total1').value;

    if (size == "") {
        document.getElementById('total1').innerHTML = "Enter Size.";
        document.getElementById('total1').style.color = "red";
        var size_check = false;
    } else {
        document.getElementById('total1').innerHTML = "";
        var size_check = true;
    }

    if (a == "") {
        document.getElementById('total').innerHTML = "Enter Quantity";
        document.getElementById('total').style.color = "red";
        var a_check = false;
    } else {
        var sum = a * 1750;
        alert('Color : White & Desing : Triangle \n'+size+ ' Size of ' + a + ' Shirt/Shirts.'+'\n'+'Your Total payment is ' + sum);
        var a_check = true;
    }

    if (a_check == true && size_check == true) {
        return true;
    }
    else {
        return false;
    }
}
function shirt2() {
    var b = document.getElementById('qua2').value;
    var total002 = document.getElementById('total002').value;

    var size = document.getElementById('sz2').value;
    var total1001 = document.getElementById('total1001').value;

    if (size == "") {
        document.getElementById('total1001').innerHTML = "Enter Size.";
        document.getElementById('total1001').style.color = "red";
        var size_check = false;
    } else {
        document.getElementById('total1001').innerHTML = "";
        var size_check = true;
    }

    if (b == "") {
        document.getElementById('total002').innerHTML = "Enter Quantity";
        document.getElementById('total002').style.color = "red";
        var a_check = false;
    } else {
        var sum = b* 1750;
        alert('Color : Dark Blue & Desing : Flower \n'+size+ ' Size of ' + b + ' Shirt/Shirts.'+'\n'+'Your Total payment is ' + sum);
        var a_check = true;
    }

    if (a_check == true && size_check == true) {
        return true;
    }
    else {
        return false;
    }
}

function shirt3() {
    var c = document.getElementById('qua3').value;
    var total004 = document.getElementById('total004').value;

    var size = document.getElementById('sz3').value;
    var total1003 = document.getElementById('total1003').value;

    if (size == "") {
        document.getElementById('total1003').innerHTML = "Enter Size.";
        document.getElementById('total1003').style.color = "red";
        var size_check = false;
    } else {
        document.getElementById('total1003').innerHTML = "";
        var size_check = true;
    }

    if (c == "") {
        document.getElementById('total004').innerHTML = "Enter Quantity";
        document.getElementById('total004').style.color = "red";
        var a_check = false;
    } else {
        var sum = c* 1750;
        alert('Color : Lightcoral & Desing : Cream Flower \n'+size+ ' Size of ' + c + ' Shirt/Shirts.'+'\n'+'Your Total payment is ' + sum);
        var a_check = true;
    }

    if (a_check == true && size_check == true) {
        return true;
    }
    else {
        return false;
    }
}

function shirt4() {
    var d = document.getElementById('qua4').value;
    var total006 = document.getElementById('total006').value;

    var size = document.getElementById('sz4').value;
    var total1005 = document.getElementById('total1005').value;

    if (size == "") {
        document.getElementById('total1005').innerHTML = "Enter Size.";
        document.getElementById('total1005').style.color = "red";
        var size_check = false;
    } else {
        document.getElementById('total1005').innerHTML = "";
        var size_check = true;
    }

    if (d == "") {
        document.getElementById('total006').innerHTML = "Enter Quantity";
        document.getElementById('total006').style.color = "red";
        var a_check = false;
    } else {
        var sum = d* 1750;
        alert('Color : Nevy Blue & Desing : Dots \n'+size+ ' Size of ' + d + ' Shirt/Shirts.'+'\n'+'Your Total payment is ' + sum);
        var a_check = true;
    }

    if (a_check == true && size_check == true) {
        return true;
    }
    else {
        return false;
    }
}

function shirt5() {
    var e = document.getElementById('qua5').value;
    var total008 = document.getElementById('total008').value;

    var size = document.getElementById('sz5').value;
    var total1007 = document.getElementById('total1007').value;

    if (size == "") {
        document.getElementById('total1007').innerHTML = "Enter Size.";
        document.getElementById('total1007').style.color = "red";
        var size_check = false;
    } else {
        document.getElementById('total1007').innerHTML = "";
        var size_check = true;
    }

    if (e == "") {
        document.getElementById('total008').innerHTML = "Enter Quantity";
        document.getElementById('total008').style.color = "red";
        var a_check = false;
    } else {
        var sum = e* 1750;
        alert('Color : Blue & Desing : White Flower \n'+size+ ' Size of ' + e + ' Shirt/Shirts.'+'\n'+'Your Total payment is ' + sum);
        var a_check = true;
    }

    if (a_check == true && size_check == true) {
        return true;
    }
    else {
        return false;
    }
}
