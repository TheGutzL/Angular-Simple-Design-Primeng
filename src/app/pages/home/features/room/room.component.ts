import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BannerInfoComponent } from '../../../../components/banner-info/banner-info.component';
import { FooterComponent } from '../../../../components/footer/footer.component';
import { PostbannerDesignComponent } from '../../../../components/postbanner-design/postbanner-design.component';
import { CardVariantPersonalityComponent } from '../../../../components/card-variant-personality/card-variant-personality.component';
import { rooms } from '../../../../data/rooms-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [
    FooterComponent,
    CommonModule,
    BannerInfoComponent,
    PostbannerDesignComponent,
    CardModule,
    ButtonModule,
    CardVariantPersonalityComponent,
  ],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss',
})
export default class RoomComponent {
  rooms = rooms;
}
