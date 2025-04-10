import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaballoDetallesComponent } from './caballo-detalles.component';

describe('CaballoDetallesComponent', () => {
  let component: CaballoDetallesComponent;
  let fixture: ComponentFixture<CaballoDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaballoDetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaballoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
