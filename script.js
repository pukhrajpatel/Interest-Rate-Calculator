function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal <= 0) {
        alert("You must give positive number for principal amounts")
    }
    else{
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML = "If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
}
}
function f()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rateVal").innerHTML=""+rateval+"%";

}
