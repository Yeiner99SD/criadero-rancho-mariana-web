import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';

@Component({
  selector: 'app-galeria',
  imports: [HeaderComponent, FooterComponent, HeroSectionComponent], 
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

}
