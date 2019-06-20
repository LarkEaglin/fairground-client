import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFeatureComponent } from './gallery-feature.component';

describe('GalleryFeatureComponent', () => {
  let component: GalleryFeatureComponent;
  let fixture: ComponentFixture<GalleryFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
