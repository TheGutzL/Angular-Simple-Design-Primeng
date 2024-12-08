import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { Image } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { Menubar } from 'primeng/menubar';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'navbar-user',
  standalone: true,
  imports: [
    Menubar,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    Ripple,
    CommonModule,
    Image,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Filosofia',
        icon: 'pi pi-home',
        link: "/about"
      },
      {
        label: 'Habitaciones',
        icon: 'pi pi-home',
        link: "/room"
      },
      {
        label: 'Bar/Restaurante',
        icon: 'pi pi-home',
        link: "/restaurant"
      },
      {
        label: 'Actividades',
        icon: 'pi pi-home',
        link: "/activity"
      },
    ];
  }
}
