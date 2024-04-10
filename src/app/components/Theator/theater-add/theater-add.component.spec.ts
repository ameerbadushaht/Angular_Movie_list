import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterAddComponent } from './theater-add.component';

describe('TheaterAddComponent', () => {
  let component: TheaterAddComponent;
  let fixture: ComponentFixture<TheaterAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheaterAddComponent]
    });
    fixture = TestBed.createComponent(TheaterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
