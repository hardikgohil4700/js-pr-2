
let month = 12;

let monthPrint = document.getElementById("month").innerHTML = month;

let message = document.getElementById("msg");
switch (month) {
    case 1:
    case 2:
    case 3:
    case 4:
        message.innerHTML = ("Winter")
        break;
    case 5:
    case 6:
    case 7:
    case 8:
        message.innerHTML = ("Summer")
        break;
    case 9:
    case 10:
    case 11:
    case 12:
        message.innerHTML = ("Monsoon")
        break;
    default:
        message.innerHTML = ("(none)Please select valid month ")
        break;
}
