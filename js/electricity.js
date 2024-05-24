
let units = 100;

let amt, totalAmt, surCharge;

if(units<=40){
  amt  = units*1;
}
else if(units <=350){
  amt = units * 2;
}
else if(units <=350){
  per = (2 / 100) * 20;
    amt = (units * 2) + per;
}
else if(units>350){
  per = (3 / 100) * 20;
  amt = (units * 3) + per;
}

surCharge = amt * 0.40;
totalAmt = amt + surCharge;
document.querySelector('.tbill').innerHTML = "total units : " + units;
document.querySelector('.bill').innerHTML = "bill : " + totalAmt;
