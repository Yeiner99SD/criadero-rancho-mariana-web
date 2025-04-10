import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';
import { Horse } from '../../models/caballo.model';
import { EjemplaresService } from '../../core/services/ejemplares.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ejemplares',
  imports: [HeaderComponent, HeroSectionComponent, CommonModule, FooterComponent, RouterModule],
  templateUrl: './ejemplares.component.html',
  styleUrl: './ejemplares.component.css'
})
export class EjemplaresComponent implements OnInit {
  
  horses: Horse[] = [];
  private horseService = inject(EjemplaresService)

  
  ngOnInit(): void {
    this.getHorses()
  }

  getHorses(){
    this.horses = this.horseService.getHorses()
  }





}
