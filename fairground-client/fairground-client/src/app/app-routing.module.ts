import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { ShopComponent } from './shop/shop.component';
import { ShopDetailsComponent } from './shop/shop-details/shop-details.component';
import { VideoComponent } from './video/video.component';
import { VideoDetailsComponent } from './video/video-details/video-details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDetailsComponent } from './gallery/gallery-details/gallery-details.component';

const routes: Routes = [
  {path: '' , component: HomepageComponent },

  {path: 'blog', component: BlogComponent },
  {path: 'blog-details', component: BlogDetailsComponent },

  {path: 'gallery', component: GalleryComponent },
  {path: 'gallery-details', component: GalleryDetailsComponent },

  {path: 'shop', component: ShopComponent },
  {path: 'shop-details', component: ShopDetailsComponent },
  
  {path: 'video', component: VideoComponent },
  {path: 'video-details', component: VideoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
