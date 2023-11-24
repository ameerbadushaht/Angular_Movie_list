import { TestBed } from '@angular/core/testing';

import { MovieShowsInterceptor } from './movie-shows.interceptor';

describe('MovieShowsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MovieShowsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MovieShowsInterceptor = TestBed.inject(MovieShowsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
