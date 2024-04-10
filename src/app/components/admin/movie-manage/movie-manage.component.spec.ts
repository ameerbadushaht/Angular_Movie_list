import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieManageComponent } from './movie-manage.component';

describe('MovieManageComponent', () => {
  let component: MovieManageComponent;
  let fixture: ComponentFixture<MovieManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieManageComponent]
    });
    fixture = TestBed.createComponent(MovieManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
