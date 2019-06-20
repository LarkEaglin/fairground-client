import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoFeatureComponent } from './video-feature.component';

describe('VideoFeatureComponent', () => {
  let component: VideoFeatureComponent;
  let fixture: ComponentFixture<VideoFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
