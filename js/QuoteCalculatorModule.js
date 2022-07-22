 import {APIConnect} from './Class/DBAPI/APIConnect.js';

 
 
 /***********************Price Values ***************************/

var photographer;
var secondP;
var videographer;
var secondV;
var editing;
var profit;
var tax;
var photobooth;
/*
      var company_p;
      var creatededitor;
      var first_shooter;
      var first_videographer;
      var id;
      var photobooth;
      var second_shooter;
      var second_videographer;
      var tax_rate;
      */

/**********Populate Pricing Values*************************/
const pricingURL = "https://www.shootingstarerp.com:8090/pricing";

await fetch(pricingURL)
  .then(response => response.json())
  .then(data => {
    profit = data.company_p;
    editing = data.editor;
    photographer = data.first_shooter;
    videographer = data.first_videographer;
    photobooth = data.photobooth;
    secondP = data.second_shooter;
    secondV = data.second_videographer;
    tax = data.tax_rate;
  });




/***********************Backend Quote Calc API Code *************************/
  const apiURL = "https://www.shootingstarerp.com:8090/quote_calculator";
  
  const apiConnect = new APIConnect(apiURL);
  const quoteForm = document.querySelector('.quoteForm');
  console.log(quoteForm);
  if(quoteForm) {
    quoteForm.addEventListener("submit", function(e) {
        e.preventDefault();
        var response = apiConnect.submitForm(e, this, "quoteForm");
        if(response) {
            console.log(response);
            var elmt = document.getElementById("successFlag");
            elmt.classList.add("popUpFlag");
        } else 
            alert('An error occured!');
    }); //event listener
  }


  /****************************slider******************/
var guestNum = 0;
var photoNum = 0;
var videoNum = 0;


//"= () =>" is same as "= function() {}"
window.guestSliderFunction = () => {
    var guestNum = document.getElementById("num_of_guests").value;
    document.getElementById('guestOutput').innerHTML = guestNum;
    document.getElementById('guestInvoiceOutput').innerHTML = guestNum;
}

window.photographerSliderFunction = () => {
    var photoNum = document.getElementById("num_of_photographers").value;
    document.getElementById('photographerOutput').innerHTML = photoNum;
    document.getElementById('photoInvoiceOutput').innerHTML = photoNum;
}

window.videographerSliderFunction = () => {
    var videoNum = document.getElementById("num_of_videographers").value;
    document.getElementById('videographerOutput').innerHTML = videoNum;
    document.getElementById('videoInvoiceOutput').innerHTML = videoNum;
}



  /**************************Active Element Focus*******************/

window.checkFocus = () => {
    var activeElement = document.activeElement;
    if (activeElement == document.getElementById("f_name") ||
        activeElement == document.getElementById("l_name") ||
        activeElement == document.getElementById("phone1") ||
        activeElement == document.getElementById("phone2") ||
        activeElement == document.getElementById("phone3") ||
        activeElement == document.getElementById("email")
    ) 
       {
        document.getElementById("contact-box").classList.add("contact-box-active");
        document.getElementById("options-box").classList.remove("options-box-active");
    } else if (activeElement == document.getElementById("venue_name") ||
              activeElement == document.getElementById("venue_city") ||
              activeElement == document.getElementById("venue_state") ||
              activeElement == document.getElementById("num_of_guests") ||
              activeElement == document.getElementById("num_of_photographers") ||
              activeElement == document.getElementById("num_of_videographers")  
    )
    {
        document.getElementById("options-box").classList.add("options-box-active");
        document.getElementById("contact-box").classList.remove("contact-box-active");
    } else {
        document.getElementById("contact-box").classList.remove("contact-box-active");
        document.getElementById("options-box").classList.remove("options-box-active");
    }
  }
 

window.focusOn = (x) => {
    if (x=="contact-box") {
        
        document.getElementById("contact-box").classList.add("contact-box-active");
        document.getElementById("options-box").classList.remove("options-box-active");
        
    } else  {
        document.getElementById("options-box").classList.add("options-box-active");
        document.getElementById("contact-box").classList.remove("contact-box-active");
    }
  }


  /***********************EVENT LISTENERS*************************************/

document.getElementById("f_name").addEventListener('click', event => { checkFocus(); });                                              
document.getElementById("l_name").addEventListener('click', event => { checkFocus(); });
document.getElementById("phone1").addEventListener('click', event => { checkFocus(); });
document.getElementById("phone2").addEventListener('click', event => { checkFocus(); });
document.getElementById("phone3").addEventListener('click', event => { checkFocus(); });
document.getElementById("email").addEventListener('click', event => { checkFocus(); });

document.getElementById("contact-box").addEventListener('click', event => {  focusOn("contact-box");  });

document.addEventListener('click', event => {  checkFocus(); });
    
    
/***************************Cost**********************************************/



window.setGuestNum = () => {    
    guestNum = parseInt(document.getElementById("num_of_guests").value);
}

window.setPhotoNum = () => {
    photoNum = parseInt(document.getElementById("num_of_photographers").value);
}

window.setVideoNum = () => {
    videoNum = parseInt(document.getElementById("num_of_videographers").value);
}


window.generateQuote = () => { 
    
    var totalPhotoCost;
    if (photoNum <= 1) {
        totalPhotoCost = photoNum * photographer;
    } else {
        totalPhotoCost = photographer + (secondP*(photoNum-1));
        
    }

    var totalVideoCost;
    if (videoNum<=1) {
        totalVideoCost = videoNum * videographer;
    } else totalVideoCost = videographer + (secondV*(videoNum-1));
    var totalEditorCost = editing;
    var personnelCosts = totalPhotoCost + totalVideoCost + totalEditorCost
    var subtotal;
    if (photoNum == 0 && videoNum == 0){
        subtotal = 0;
    } else subtotal = Number(personnelCosts * (1+profit)).toFixed(2);
    var taxAmount = Number(subtotal * tax).toFixed(2);
    var grandTotal = (Number(subtotal) + Number(taxAmount)).toFixed(2);

    //display to screen
    document.getElementById('subtotal').innerHTML = subtotal;
    document.getElementById('tax').innerHTML = taxAmount;
    document.getElementById('grandTotal').innerHTML = grandTotal;



}


/**********************Items*****************************************/

var f_name;
var l_name;
var phone1;
var phone2;
var phone3;
var email;
var venueName;
var venueCity;
var venueState;

window.populateDetails = (id) => {
    switch (id) {
        case "f_name":
            f_name = document.getElementById("f_name").value;
            document.getElementById('outFName').innerHTML = f_name;
            break;
        case "l_name":
            l_name = document.getElementById("l_name").value;
            document.getElementById('outLName').innerHTML = l_name;
            break;
        case "phone1":
            phone1 = document.getElementById("phone1").value;
            document.getElementById('outPhone1').innerHTML = phone1;
            break;
        case "phone2":
            phone2 = document.getElementById("phone2").value;
            document.getElementById("dash1").classList.remove("invisible");
            document.getElementById('outPhone2').innerHTML = phone2;
            break;
        case "phone3":
            phone3 = document.getElementById("phone3").value;
            document.getElementById("dash2").classList.remove("invisible");
            document.getElementById('outPhone3').innerHTML = phone3;
            break;
        case "email":
            email = document.getElementById("email").value;
            document.getElementById('outEmail').innerHTML = email;
            break;
        case "venue_name":
            venueName = document.getElementById("venue_name").value;
            document.getElementById('outVenue').innerHTML = venueName;
            break;
        case "venue_city":
            venueCity = document.getElementById("venue_city").value;
            document.getElementById('outCity').innerHTML = venueCity;
            break;
        case "venue_state":
            venueState = document.getElementById("venue_state").value;
            document.getElementById("comma1").classList.remove("invisible");
            document.getElementById('outState').innerHTML = venueState;
            break;

    }
}

window.populateItems = (id) => {
    switch(id) {
        case "num_of_guests":
            document.getElementById("quoteGuests").classList.remove("noDisplay");
            break;
        case "num_of_photographers":
            document.getElementById("quotePhotographers").classList.remove("noDisplay");
            break;
        case "num_of_videographers":
            document.getElementById("quoteVideographers").classList.remove("noDisplay");
            break;
}}





