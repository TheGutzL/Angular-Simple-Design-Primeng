import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { FluidModule } from 'primeng/fluid';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [
    DatePickerModule,
    FormsModule,
    FluidModule,
    FloatLabel,
    CardModule,
    ButtonModule,
  ],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
})
export default class ReservationComponent {
  rangeDates: Date[] | undefined;
}
