function submitHandler(event) {
     event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

if (name=="") {
    return alert ("PLEASE ENTER YOUR NAME")
}   else if (email=="") { 
    return alert ("PLEASE ENTER YOUR EMAIL")
}   else if (phone=="") { 
    return alert ("PLEASE ENTER YOUR PHONE NUMBER")
}   else if (subject=="") { 
    return alert ("PLEASE CHOOSE YOUR SUBJECT")
}   else if (message=="") { 
    return alert ("PLEASE ENTER YOUR MESSAGE")
}

const data = {
    name, email, phone, subject, message
}

const yourEmail = "muharraamm@gmail.com"

let a = document.createElement("a");
a.href = `https://mail.google.com/mail?view=cm&fs-1&to=${yourEmail}&su=${subject}&body=${message}`
a.click();

console.log(data)

}