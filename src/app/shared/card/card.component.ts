import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() show = false;
  @Input() name = '';
  @Input() image = '';
  @Input() description = '';
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
