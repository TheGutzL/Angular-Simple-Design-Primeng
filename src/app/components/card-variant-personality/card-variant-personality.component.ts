import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-card-variant-personality',
  standalone: true,
  imports: [CommonModule, ButtonModule, Toast, Ripple],
  providers: [MessageService],
  templateUrl: './card-variant-personality.component.html',
  styleUrl: './card-variant-personality.component.scss',
})
export class CardVariantPersonalityComponent {
  @Input() title?: string;
  @Input() description?: string;
  @Input() image?: string;
  @Input() infoRoom?: string;
  @Input() showExtraInfo: boolean = false;
  @Input() showButton: boolean = false;

  constructor(private messageService: MessageService) {}

  show() {
    this.messageService.add({
      severity: 'info',
      summary: 'Reserva añadida',
      detail: 'Se ha añadido la reserva correctamente',
      life: 3000,
    });
  }
}
