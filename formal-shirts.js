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
        var sum = a * 1440;
        alert('Color : Green \n'+size+ ' Size of ' + a + ' Shirt/Shirts.'+'\n'+'Your Total payment is ' + sum);
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
        var sum = b* 1440;
        alert('Color : Light Blue  \n'+size+ ' Size of ' + b + ' Shirt/Shirts.'+'\n'+'Your Total payment is ' + sum);
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
        var sum = c* 1440;
        alert('Color : Light Sky \n'+size+ ' Size of ' + c + ' Shirt/Shirts.'+'\n'+'Your Total payment is ' + sum);
        var a_check = true;
    }

    if (a_check == true && size_check == true) {
        return true;
    }
    else {
        return false;
    }
}
