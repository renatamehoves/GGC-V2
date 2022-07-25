/***********Pricing Import*****************/
var firstP;
var secondP;
var firstV;
var secondV;
var editing;
var profit;
var tax;
var photobooth;

const pricingURL = "https://www.shootingstarerp.com:8543/pricing";

await fetch(pricingURL)
  .then(response => response.json())
  .then(data => {
    profit = data.company_p;
    editing = data.editor;
    firstP = data.first_shooter;
    firstV = data.first_videographer;
    photobooth = data.photobooth;
    secondP = data.second_shooter;
    secondV = data.second_videographer;
    tax = data.tax_rate;
  });


var diamond = ((editing + firstP)*(1+profit)).toFixed(0);
var diamondPrint = prettyPrice(diamond);

var ruby = ((editing + firstP + secondP)*(1+profit)).toFixed(0);
var rubyPrint = prettyPrice(ruby);

var emerald = ((editing + firstP + secondP + firstV)*(1+profit)).toFixed(0);
var emeraldPrint = prettyPrice(emerald);




function prettyPrice(i){
  var test = i.toString();
  if(test.length > 3){
    return  "$" + test.slice(0, test.length-3) + "," + test.slice(-3, test.length); 
  } else return "$" + test;
  
}

document.getElementById("diamond").innerHTML = diamondPrint;

document.getElementById("ruby").innerHTML = rubyPrint;

document.getElementById("emerald").innerHTML = emeraldPrint;

