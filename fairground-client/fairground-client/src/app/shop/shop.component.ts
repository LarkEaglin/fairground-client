import { Component, OnInit } from '@angular/core';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(
    private title_service: TitleService
  ){}

  ngOnInit() {
    this.titleLabel();
  }

  title: string;
  titleLabel() {
    this.title_service.cast.subscribe(
      title=> this.title = title );
    this.title_service.editTitle('Shop');
  }
}
