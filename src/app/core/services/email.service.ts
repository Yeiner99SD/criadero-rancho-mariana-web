import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  
  private serviceID = 'service_f01vvhw'
  private templateID = 'template_icyph2h'
  private publicKey = "fmg9-ZyhjZMEHssLU"

  constructor(){
  }

  sendEmail(data: Record<string, unknown>): Promise<EmailJSResponseStatus> {
    return emailjs.send(this.serviceID, this.templateID, data, this.publicKey);
  }

}
