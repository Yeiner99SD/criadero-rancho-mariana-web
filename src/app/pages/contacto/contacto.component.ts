import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';
import {GoogleMap} from '@angular/google-maps';

@Component({
  selector: 'app-contacto',
  imports: [HeaderComponent, FooterComponent, HeroSectionComponent, GoogleMap],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  center: google.maps.LatLngLiteral = {lat: 4.5803927, lng: -74.3462846}  ;
  zoom = 16;
  display!: google.maps.LatLngLiteral;

 

}
