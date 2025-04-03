import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-escuela',
  imports: [HeaderComponent, HeroSectionComponent, FooterComponent],
  templateUrl: './escuela.component.html',
  styleUrl: './escuela.component.css'
})
export class EscuelaComponent {

}
