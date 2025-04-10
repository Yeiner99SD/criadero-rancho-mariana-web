import { Component, inject, OnInit } from '@angular/core';
import { Horse } from '../../models/caballo.model';
import { ActivatedRoute } from '@angular/router';
import { HORSES_DATA } from '../../data/horses.data';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-caballo-detalles',
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './caballo-detalles.component.html',
  styleUrl: './caballo-detalles.component.css'
})
export class CaballoDetallesComponent implements OnInit {
  horse: Horse | undefined;
  
  private route = inject(ActivatedRoute)
  
  
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.horse = HORSES_DATA[id]
  }

}
