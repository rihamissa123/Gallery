import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDetailComponent } from './image-detail.component';

describe('IamgeComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageDetailComponent]
    });
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
