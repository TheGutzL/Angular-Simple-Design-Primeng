import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-info.component.html',
  styleUrl: './banner-info.component.scss',
})
export class BannerInfoComponent {
  @Input() title?: string;
  @Input() description?: string;
  @Input() breadcrumb?: string;
}
