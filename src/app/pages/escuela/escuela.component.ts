import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-escuela',
  imports: [HeaderComponent, HeroSectionComponent, FooterComponent, CardComponent],
  templateUrl: './escuela.component.html',
  styleUrl: './escuela.component.css'
})
export class EscuelaComponent {
  selectedMember: any = null;
  showModal = false;

teamMembers = [
  {
    name: 'Alex Arias',
    image: 'images/alex_instructor.jpg',
    description: 'Con su experiencia Alex ha trabajo desde pequeño con caballos y ha tenido el privilegio de enseñar etc etc etc '
  },
  {
    name: 'Paola Camero',
    image: 'images/paola_instructora.png',
    description: 'Instructora apasionada por la conexión humano-caballo, lleva alrededor de 1 año de experiecia en deporte equestre. etc etc.'
  }
];

openModal(member: any) {
  this.selectedMember = member;
  this.showModal = true;
  document.body.classList.add('overflow-hidden');
}

closeModal() {
  this.showModal = false;
  document.body.classList.remove('overflow-hidden');
}


}
