import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { BlogFeatureComponent } from './blog/blog-feature/blog-feature.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutFeatureComponent } from './homepage/about-feature/about-feature.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDetailsComponent } from './gallery/gallery-details/gallery-details.component';
import { GalleryFeatureComponent } from './gallery/gallery-feature/gallery-feature.component';
import { ShopComponent } from './shop/shop.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { VideoComponent } from './video/video.component';
import { VideoFeatureComponent } from './video/video-feature/video-feature.component';
import { VideoDetailsComponent } from './video/video-details/video-details.component';
import { ShopDetailsComponent } from './shop/shop-details/shop-details.component';
import { ScrollService } from './services/scroll.service';
import { ArtistsComponent } from './artists/artists.component';
import { FooterComponent } from './toolbar/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutFeatureComponent,
    ArtistsComponent,
    VideoComponent,
    VideoDetailsComponent,
    VideoFeatureComponent,
    BlogComponent,
    BlogFeatureComponent,
    BlogDetailsComponent,
    ToolbarComponent,
    ShopComponent,
    ShopDetailsComponent,
    FooterComponent,
    GalleryComponent,
    GalleryFeatureComponent,
    GalleryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
