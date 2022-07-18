import {FetchService} from './FetchService.js';

export class APIConnect {
    
    #fetchService;
    #URL;



    constructor(url) {
        this.#fetchService = new FetchService;
        this.#URL = url;
    }

    async submitForm(e, form, btnId) {
        e.preventDefault();
        const btnSubmit  = document.getElementById(btnId);
        btnSubmit.disabled = true;
        setTimeout(() =>btnSubmit.disabled = false, 15000);
        const jsonFormData  = this.#buildJsonFormData(form);
        const headers = this.#buildHeaders();
        const response = await this.#fetchService.performPostHttpRequest(
            this.#URL, headers, jsonFormData);
        if(response) {return response;} else return null;
    } // end public submitForm method

    async getData() {
      const headers = this.#buildHeaders();
      const response = await this.#fetchService.performGetHttpRequest(
        this.#URL, headers)
      if(response) {return response;} else return null;
    }




    #buildJsonFormData(form) {
        const jsonFormData = { };
        for(const pair of new FormData(form)) {
          jsonFormData[pair[0]]  = pair[1];
        }
        return jsonFormData;
      } // end private buildJsonFormData method

    #buildHeaders(authorization = null) {
        const headers = {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "**"};
        return headers;
      }  //end private buildHeader method

} // end APIConnect class