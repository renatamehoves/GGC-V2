/***********************Price Values ***************************/

var photographer = 800;
var secondP = photographer/2;
var videographer = 1600;
var edditing = 200;
var profit = 1.3;
var tax = .0825;





/***********************Backend API Code *************************/
class FetchService {
    constructor() {
  
    }
  
  async performGetHttpRequest(fetchLink, headers, query=null) {
    if(!fetchLink || !headers) {
      throw new Error("One or more GET request parameters was not passed.");
    }
    try {
      const rawResponse = await fetch(fetchLink, {
        method: "GET",
        headers: headers,
        query: (query != null) ? query : ""
      });
      const content = await rawResponse.json();
      return content;
    }
    catch(err) {
      console.error(`Error at fetch GET: ${err}`);
      throw err;
    }
  }
  
  async performPostHttpRequest(fetchLink, headers, body) {
    if(!fetchLink || !headers || !body) {
      throw new Error("One or more POST request parameters was not passed.");
    }
    try {
      const rawResponse = await fetch(fetchLink, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body)
      });
      const content = await rawResponse.json();
      return content;
    }
    catch(err) {
      console.error(`Error at fetch POST: ${err}`);
      throw err;
    }
  }
  
    async performPutHttpRequest(fetchLink, headers, body) {
        if(!fetchLink || !headers || !body) {
            throw new Error("One or more POST request parameters was not passed.");
        }
        try {
            const rawResponse = await fetch(fetchLink, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify(body)
            });
            const content = await rawResponse.json();
            return content;
        }
        catch(err) {
            console.error(`Error at fetch PUT: ${err}`);
            throw err;
        }
    }
  }
  
  const fetchService = new FetchService();
  
  const quoteForm = document.querySelector('.quoteForm');
  console.log(quoteForm);
  if(quoteForm) {
    quoteForm.addEventListener("submit", function(e) {
      submitForm(e, this);
    }); //event listener
  }
  
  async function submitForm(e, form) {        
    e.preventDefault();
    const btnSubmit  = document.getElementById('btnSubmit');
    btnSubmit.disabled = true;
    setTimeout(() =>btnSubmit.disabled = false, 15000);
    const jsonFormData  = buildJsonFormData(form);
    const headers = buildHeaders();
    const response = await fetchService.performPostHttpRequest(
                'http://www.shootingstarerp.com:8090/quote_calculator', headers, jsonFormData);
    console.log(response);
    if(response) {
      var elmt = document.getElementById("successFlag");
      elmt.classList.add("popUpFlag");
    }
    else 
        alert('An error occured!');
  }
  
  function buildHeaders(authorization = null) {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "**"};
    return headers;
  }
  
  function buildJsonFormData(form) {
    const jsonFormData = { };
    for(const pair of new FormData(form)) {
      jsonFormData[pair[0]]  = pair[1];
    }
    return jsonFormData;
  }

  /****************************slider******************/
var guestNum;
var photoNum;
var videoNum;

function guestSliderFunction() {
    var guestNum = document.getElementById("num_of_guests").value;
    document.getElementById('guestOutput').innerHTML = guestNum;
    document.getElementById('guestInvoiceOutput').innerHTML = guestNum;
}

  
function photographerSliderFunction() {
    var photoNum = document.getElementById("num_of_photographers").value;
    document.getElementById('photographerOutput').innerHTML = photoNum;
    document.getElementById('photoInvoiceOutput').innerHTML = photoNum;
}

function videographerSliderFunction() {
    var videoNum = document.getElementById("num_of_videographers").value;
    document.getElementById('videographerOutput').innerHTML = videoNum;
    document.getElementById('videoInvoiceOutput').innerHTML = videoNum;
}



  /**************************Active Element Focus*******************/

  function checkFocus() {
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
 

  function focusOn(x) {
    if (x=="contact-box") {
        
        document.getElementById("contact-box").classList.add("contact-box-active");
        document.getElementById("options-box").classList.remove("options-box-active");
        contactBox = false; 
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



function setGuestNum() {    
    guestNum = document.getElementById("num_of_guests").value;
}

function setPhotoNum() {
    photoNum = document.getElementById("num_of_photographers").value;
}

function setVideoNum() {
    videoNum = document.getElementById("num_of_videographers").value;
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

function populateDetails(id) {
    switch(id) {
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

}}

function populateItems(id) {
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





