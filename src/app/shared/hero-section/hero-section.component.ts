import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

  @Input() text!: string
}
