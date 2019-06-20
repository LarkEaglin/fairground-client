import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private title = new BehaviorSubject<string>('Welcome');
  cast = this.title.asObservable();

  constructor() { }

  editTitle(new_title){
    this.title.next(new_title);
  }

}