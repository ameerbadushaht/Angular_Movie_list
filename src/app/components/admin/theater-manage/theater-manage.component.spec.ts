import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterManageComponent } from './theater-manage.component';

describe('TheaterManageComponent', () => {
  let component: TheaterManageComponent;
  let fixture: ComponentFixture<TheaterManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheaterManageComponent]
    });
    fixture = TestBed.createComponent(TheaterManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
