import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';
import {GoogleMap} from '@angular/google-maps';
import { FormControl, FormGroup, FormsModule,  ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../../core/services/email.service';

@Component({
  selector: 'app-contacto',
  imports: [HeaderComponent, FooterComponent, HeroSectionComponent, GoogleMap, FormsModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  center: google.maps.LatLngLiteral = {lat: 4.5803927, lng: -74.3462846}  ;
  zoom = 16;
  display!: google.maps.LatLngLiteral;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  })
  
  private emailService = inject(EmailService)
  
  constructor() {}


  submit(){
    if(this.form.valid){
      this.emailService.sendEmail(this.form.value).then(res => {
        console.log("Email enviado", res)
        this.form.reset()
      }).catch(err => {
        console.log("Error al enviar el form", err)
      })
    }
  }



 

}
