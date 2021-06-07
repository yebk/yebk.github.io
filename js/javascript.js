function verifyregister() {
    //variables for checks
    var un = document.getElementById("usrname").value;
    var pw = document.getElementById("pswd").value;
    var pwrp = document.getElementById("pswd-repeat").value;

    //username check ########################################################

    //check empty username field  
    if (un == "") {
        document.getElementById("unmessage").innerHTML = "**Fill the username please!";
        return false;
    }

    //minimum username length validation  
    if (un.length < 4) {
        document.getElementById("unmessage").innerHTML = "**username length must be atleast 4 characters";
        return false;
    }

    //maximum length of username validation  
    if (un.length > 15) {
        document.getElementById("unmessage").innerHTML = "**username length must not exceed 15 characters";
        return false;
    }


    //password check ########################################################

    //check empty password field  
    if (pw == "") {
        document.getElementById("pwmessage").innerHTML = "**Fill the password please!";
        return false;
    }

    //minimum password length validation  
    if (pw.length < 8) {
        document.getElementById("pwmessage").innerHTML = "**Password length must be atleast 8 characters";
        return false;
    }

    //maximum length of password validation  
    if (pw.length > 15) {
        document.getElementById("pwmessage").innerHTML = "**Password length must not exceed 15 characters";
        return false;
    }

    //repeat password check ########################################################

    //check passwords match  
    if (pw != pwrp) {
        document.getElementById("pwrpmessage").innerHTML = "**Passwords do not match";
        return false;
    } else {
        alert("register correct");
    }

}