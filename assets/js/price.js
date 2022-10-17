// 0 month
// 1 annual
var x=0;
function change()
{
    if(x==0)
    setPriceAnnual();
    else
    setPriceMonthly();
}
function setPriceAnnual()
{
    x=1;
    document.getElementById("price_card1").innerHTML="199.99";
    document.getElementById("price_card2").innerHTML="249.99";
    document.getElementById("price_card3").innerHTML="399.99";
    
}
function setPriceMonthly()
{
    x=0;
    document.getElementById("price_card1").innerHTML="19.99";
    document.getElementById("price_card2").innerHTML="24.99";
    document.getElementById("price_card3").innerHTML="39.99";
}