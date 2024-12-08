import { Component } from '@angular/core';
import { FooterComponent } from "../../../../components/footer/footer.component";
import { BannerInfoComponent } from "../../../../components/banner-info/banner-info.component";
import { PostbannerDesignComponent } from '../../../../components/postbanner-design/postbanner-design.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FooterComponent, BannerInfoComponent, PostbannerDesignComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export default class AboutComponent {

}
