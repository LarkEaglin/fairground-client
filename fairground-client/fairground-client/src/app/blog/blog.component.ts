import { Component, OnInit } from '@angular/core';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
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
    this.title_service.editTitle('Blog');
  }
}
