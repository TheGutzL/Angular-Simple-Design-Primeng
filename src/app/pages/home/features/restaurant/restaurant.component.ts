import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BannerInfoComponent } from '../../../../components/banner-info/banner-info.component';
import { CardVariantPersonalityComponent } from '../../../../components/card-variant-personality/card-variant-personality.component';
import { FooterComponent } from '../../../../components/footer/footer.component';
import { PostbannerDesignComponent } from '../../../../components/postbanner-design/postbanner-design.component';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [
    FooterComponent,
    BannerInfoComponent,
    PostbannerDesignComponent,
    CardModule,
    ButtonModule,
    CardVariantPersonalityComponent,
  ],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss',
})
export default class RestaurantComponent {}